import { NotImplementedError } from '../extensions/index.js'

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chain: [],

//**************************
  getLength() 
  {
    return this.chain.length;
  },

//   ***********************
  addLink(value) 
  {
    if (arguments.length < 1) 
    {
      this.chain.push('( )');
    } 
    else 
    {
      this.chain.push(value);
    }
   return this;
  },

//   ******************************
  removeLink(position) 
   {
    if (position <= 0 
      || typeof position != 'number' 
      || position > this.chain.length) 
      {
         this.chain = [];
         throw new Error(`You can't remove incorrect link!`);
      }
         this.chain.splice(position - 1, 1);
         return this;
   },

// ***********************
  reverseChain() 
  {
    this.chain.reverse();
    return this;
  },

  finishChain() 
   {
   let result = this.chain.map(i => i = `( ${i} )`);
   this.chain = [];
   return result.join('~~');
   },
}