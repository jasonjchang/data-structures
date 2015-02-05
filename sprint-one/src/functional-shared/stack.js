var Stack = function() {
  var someInstance = {
    storage: {},
    length  : 0
  };

  //state length /length
  _.extend(someInstance, stackMethods);
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function(value){
  //store length  key into obj - equate to value
  this.storage[this.length ] = value;
  //increment length  for next
  this.length++;
};

stackMethods.pop = function(){
  if(this.length >0){
    this.length--;
    var result = this.storage[this.length];
    delete this.storage[this.length];
    return result;
  }
};

stackMethods.size = function(){
  return this.length;
};

console.log(Stack());




