class Queue {
   
  constructor(size){
    this.data = new Array(size);
    this.size = size;
    this.rear = 0;
    
  }
  enqueue(element) {
    if(!this.isFull()) {
          this.data[this.rear] = element;
          this.rear = this.rear + 1;
     }
  }
  dequeue() {
    if(this.isEmpty()) {
      return null;
    }
    let i = this.size;
    while(!this.data[i]){
      this.data[i]=null;
      i--;
    }
      this.rear = this.rear-1;
       return this.data.shift();
    
  }
  length() {
      return this.rear;
    }
  isFull(){
    return this.rear === this.size;
  }
  isEmpty() {
    return this.rear === 0;
  }

  getFront() {
    if(this.isEmpty() === false) {
        return this.data[0];
    }
  }

getLast() { 
  if(this.isEmpty() === false) {
       return this.data[ this.rear - 1 ] ;
    }
  }
  print(){
    if(this.isEmpty()){
      console.log("the queue is empty");
    }
    let i;
    let str = '';
    for(i=0;i<this.rear;i++){
      str += this.data[i] + ' ';
    }
    console.log(str);
  } 
}

class CircularQueue extends Queue{
  constructor(size){
    super(size);
    this.front= -1;
    this.rear = -1;
    this.currentLenght = 0;
  }
  isEmpty() {
    return this.currentLenght === 0;
  }
  isFull(){
    return this.currentLenght===this.size;
  }
  enqueue(element) {
    if(!this.isFull()) {
          this.rear = (this.rear + 1) % this.size;
          this.data[this.rear] = element;
          this.currentLenght+=1;
          if(this.front === -1){
            this.front = this.rear;
          }       
        }
      }
    dequeue(){
      if(this.isEmpty()){
        return null;
      }
      const item = this.data[this.front];
      this.data[this.front]= null;
      this.front = (this.front + 1) % this.size;
      this.currentLenght -= 1;
      if(this.isEmpty()){
        this.front = -1;
        this.rear = -1;
      }
      return item;
    }
    print(){
      if(this.isEmpty()){
        console.log("Queue is empty")
      }else{
        let i;
        let str = '';
      for(i=this.front;i!==this.rear;i= (i+1) % this.size ){
        str += this.data[i] + " ";

      } 
      str += this.data[i];
      console.log(str);
      }
    }
  }
// Queue test
  let testQueue = new Queue(5);
  testQueue.enqueue(10);
  testQueue.enqueue(20);
  testQueue.enqueue(30);
  testQueue.enqueue(40);
  testQueue.enqueue(50);
  testQueue.print();
  console.log(testQueue.dequeue());
  console.log(testQueue.dequeue());
  testQueue.print();
  testQueue.enqueue(60);
  testQueue.enqueue(70);
  console.log(testQueue.dequeue());
  testQueue.print();
  console.log(testQueue.dequeue());
  console.log(testQueue.dequeue());
  testQueue.print();
// CircularQueue test
let circularQ = new CircularQueue(5);
console.log(circularQ.isEmpty());
circularQ.enqueue(10);
circularQ.enqueue(20);
circularQ.enqueue(30);
circularQ.enqueue(40);
circularQ.enqueue(50);
console.log(circularQ.isFull());
circularQ.print();
console.log(circularQ.dequeue());
console.log(circularQ.dequeue());
circularQ.print();

