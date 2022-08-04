class Node {
  constructor(data,left = null,right=null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }
  add(data){
    const node = this.root;
    if(node === null){
      this.root = new Node(data);
      return;
    }else{
      const searchTree = (node)=>{
        if(data<node.data){
          if(node.left ===null){
            node.left = new Node(data);
            return;
          }else if (node.left !==null){
            return searchTree(node.left);
          }
        }else if(data>node.data){
          if(node.right === null){
            node.right = new Node(data);
            return;
          }else if(node.right !== null){
            return searchTree(node.right);
          }
        }else{
          return null;
        }
      };
      return searchTree(node);
    }
  }
}

// Test add()
let nodoRaiz = new Node(30);
let nodo2 = new Node(20);
let nodo3 = new Node(40);
nodoRaiz.left = nodo2;
nodoRaiz.right = nodo3;

let myBinaryTree = new BinaryTree();
myBinaryTree.add(nodoRaiz.data);
myBinaryTree.add(25);
myBinaryTree.add(35);
myBinaryTree.add(45);
console.log(myBinaryTree);