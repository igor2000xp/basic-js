import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 export default function getDNSStats(domains) {
   let object = {};
   
   for (let i of domains) 
   {
     let formattedDomains = i.split('.').reverse();
 
     for (let j = 0; j < formattedDomains.length; j++) 
     {
       if (j === 0) 
       {
         const firstLevelDomain = `.${formattedDomains[0]}`;
         if (object.hasOwnProperty(firstLevelDomain)) 
         {
           object[firstLevelDomain]++;
         } 
         else 
         {
           object[firstLevelDomain] = 1;
         }
       } 
       else 
       {
         const lengthOfDomain = `.${formattedDomains.slice(0, j + 1).join('.')}`;
         if (object.hasOwnProperty(lengthOfDomain)) 
         {
           object[lengthOfDomain]++;
         } 
         else 
         {
           object[lengthOfDomain] = 1;
         }
       }
     }
     
   }
   return object;
 }