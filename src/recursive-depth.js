import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 export default class DepthCalculator {
   calculateDepth(arr) {
     let maxDepth = 1;
     let calcDepth = 1;
 
     for (let i = 0; i < arr.length; i++) 
     {
      if (arr[i] instanceof Array) 
      {
        calcDepth += this.calculateDepth(arr[i]);
      }
 
       maxDepth = Math.max(calcDepth, maxDepth);
       calcDepth = 1;
     }
 
     return maxDepth;
   }
 }
