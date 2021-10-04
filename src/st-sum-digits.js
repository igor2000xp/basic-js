import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

 export default function getSumOfDigits(n) {
   let array = n.toString().split('');
   return helper(array);
 
   function helper(string) {
     if (string.length === 1) 
     {
      let result = +string;
      return result;
     }

     let newString = string.reduce((accaunt, current) => +accaunt + +current);
     let result = helper(newString.toString().split(''));
     return result;
   }
 
 }