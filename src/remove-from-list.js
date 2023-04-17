const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k ) {
  
  var result = new ListNode;
  return copy(l, result,k);

}

function copy(list, res, k){
    if (list.value != k) {
      res.value = list.value;
      if (list.next === null) 
      {
        console.log(res.value, res.next.value,res.next.next.value);
      return res;
      }
      res.next = new ListNode;
      copy(list.next, res.next,k);
    }
     
    
    res.value = new ListNode;
    
    copy(list.next, res.value,k);
    
}


module.exports = {
  removeKFromList
};
