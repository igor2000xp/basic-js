import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { numberRepeat: 3, separator: '**', 
 * addition: 'PLUS', addNumberRepeat: 3, addSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

 export default function repeater(str, options) {
   let 
   { 
     repeatTimes = 1,
     separator = '+',
     addition = '',
     additionRepeatTimes = 1,
     additionSeparator = '|'} = options;
 
   let resultString = '';
   let addString = '';
 
   if (addition !== '') 
   {
     addString = repeater(addition, {repeatTimes: additionRepeatTimes, separator: additionSeparator});
   }
 
   if (repeatTimes > 0) 
   {
      resultString = str + addString;
   }
      repeatTimes--;
   
   for (let i = 0; i < repeatTimes;) 
   {
      repeatTimes--;
      resultString += (separator + str + addString);
   }
   return resultString;
 }