import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

 export default class VigenereCipheringMachine {
   constructor(direct = true) 
   {
     this.direct = direct;
   }
 
   encrypt(message, key, str = '', k = 0) 
   {
     if (!message || !key)
     {
      throw new Error('Incorrect arguments!');
     }
     message = message.toUpperCase();
     key = key.toUpperCase();
     for (let i = 0; i < message.length; i++)
     {
       if (message.charCodeAt(i) >= 65 
       && message.charCodeAt(i) <= 90) 
       {
         let str0 = message.charCodeAt(i) + key.charCodeAt(k % key.length) - 130;
         str0 = str0 % 26 +65;
         str += String.fromCharCode(str0);
         k++;
       }
       else str += message[i];
     }
     if(this.direct)
     {
      return str;
     }
     else
     {
      let result = str.split('').reverse().join('');
      return result; 
     }
       
   }
 
   decrypt(message, key, str = '', k = 0) {
     if (!message || !key)
     {
      throw new Error('Incorrect arguments!');
     }
     message = message.toUpperCase();
     key = key.toUpperCase();
     for (let i = 0; i < message.length; i++)
     {
       if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) 
       {
         let str0 = message.charCodeAt(i) + 26 - key.charCodeAt(k % key.length);
         str0 = str0 % 26 + 65;
         str += String.fromCharCode(str0);
         k++;
       }
       else str += message[i];
     }
     if(this.direct)
     {
         return str;
     }
     let result = str.split('').reverse().join('');
     return result;
   }
 }
