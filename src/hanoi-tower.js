import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */

export default function calculateHanoi(disksNumber, turnsSpeed) {
   let turns = 2 ** disksNumber - 1;

   // Метод Math.floor() — дает целое число с нулевой дробной частью, 
   // ближайшее к числу аргумента слева, другими словами — 
   // округляет дробь в меньшую сторону.

   let seconds = Math.floor(turns / (turnsSpeed / 3600));

   return {turns, seconds};
}