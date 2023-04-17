const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

 root() {

    return this.rootNode;
  
  }

  add( data ) {
    
    var newNode = new Node(data);

    if (this.rootNode == null) this.rootNode = newNode;
      else this.insertNode(this.rootNode, newNode);
  }
  insertNode(node, newNode){

    if (newNode.data < node.data) {
       if (node.left == null) node.left = newNode;
        else this.insertNode(node.left, newNode);
      }
      else {
        if (node.right == null) node.right = newNode;
          else this.insertNode(node.right, newNode);
      }
  }

   has( data) {
    
    if (this.find(data) == null) return false; 
      else return true;
  }

  find( data ) {
    if ( this.rootNode.data == data) return this.rootNode;
      else 
        if ( data < this.rootNode.data) return this.searchNode(data, this.rootNode.left);
          else return this.searchNode(data, this.rootNode.right);
  }

  searchNode(data, node) {
    if (node == null) return null;
    if (data < node.data  ) return this.searchNode(data, node.left);
      else if (data > node.data) return this.searchNode(data, node.right);
        else return node;

  }

  remove( elemToDel ) {

    this.rootNode = this.removeNode(this.rootNode, elemToDel); 
  }
  removeNode(node, elem){

    if (node === null) return null;
    else
    if(elem < node.data) {
      node.left = this.removeNode(node.left, elem);
      return node;
    } else 
    if(elem > node.data) {
      node.right = this.removeNode(node.right, elem);
      return node;
    } else
        if(node.left === null && node.right === null) {
          node = null;
          return node;
        }
    if(node.left === null){
      node = node.right;
      return node;
    } else 
        if(node.right === null)
        {
         node = node.left;
        return node;
        }
    var min = this.findMin(node.right);
    node.data = min
    node.right = this.removeNode(node.right, min);
    return node;

  }

  min() {
    if (this.rootNode.data == null) return null;
    if ( this.rootNode.left == null ) return this.rootNode.data;
      else return this.findMin(this.rootNode.left);
  }
  findMin(node){
    if (node.left == null) return node.data;
      else return this.findMin(node.left);

  }

  max() {
    if (this.rootNode.data == null) return null;
    if ( this.rootNode.right == null ) return this.rootnode.data;
      else return this.findMax(this.rootNode.right)
  }

  findMax(node){
    if (node.right == null) return node.data;
      else return this.findMax(node.right);

  }
}

class Node {

  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }

}

module.exports = {
  BinarySearchTree
};