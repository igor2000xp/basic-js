import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 export default function deleteDigit(n) {
   let arr = Array.from(String(n), Number);
   let object = {};

   for (let i = 0; i < arr.length; i++) 
   {
     let copyArr = [...arr];
     copyArr.splice(i, 1);
     object[arr[i]] = +copyArr.join('');
   }
   let number = Object.values(object);
   let mValue = Math.max(...number);
   return mValue;
 }