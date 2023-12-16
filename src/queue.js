const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.value = null;
    this.next = null;
    }
  
    getUnderlyingList() {
    /*  if (this.next == null) return this.value
      function findLast(l) {
        let out = undefined;
        if (l.next == null){ 
          out = l.value;
          return out;
        }
      return findLast(l.next);
      }
       return findLast(this) */
      return this;
       }
    
  enqueue( value ) {
    if (this.value == null && this.next == null) {
      this.value  = value;
      return;
    }
   function findlast(l){
      if (l.next == null) {
        l.next = new ListNode(value);
       return l ;
      } else findlast(l.next)
      return l;
    }
    let n = new  ListNode(null);
    n = findlast(this);
    this.next = n.next;
    this.value =n.value; 
        
    }
  
      dequeue() {
        let out = this.value;
        this.value = this.next.value;
        this.next = this.next.next;
        return out;
        
      /*function deleteLast(l) {
        if (l.next.next == null){
        let out = l.next.value;
        l.next = null
        return out;
        }
        return deleteLast(l.next);
      }
      return deleteLast(this) */
      }
}

module.exports = {
  Queue
};
