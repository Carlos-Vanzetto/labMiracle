import characters from "../characters.js"

Array.prototype.myReduce = function(reducerCb,initialValue){
  
  var i = 0;
  if (arguments.length < 2) {
    i = 1;
    initialValue = this[0];
  }
  for(; i < this.length; i++) {
    initialValue = reducerCb(initialValue, this[i], i, this);
  }
  return initialValue;
};

let testArr= [1,2,3,4,5];
console.log(testArr.myReduce((acc,element)=>acc+element,10));

 let initialHeight = 0;
let totalHeight = characters.myReduce((totalHeight, {height}) => {
	totalHeight = totalHeight + parseInt(height);
	return totalHeight;
}, initialHeight);
console.log(totalHeight);