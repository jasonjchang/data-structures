var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  return someInstance;
};

var queueMethods = {
    storage : {},
    length  : 0,
    key     : 0,
    start   : 0
};

queueMethods.enqueue = function(value){
   if(this.length >= 0){
    this.storage[this.key] = value;
    this.length++;
    this.key++;
  }
};

queueMethods.dequeue = function(){
  if(this.length > 0){
    this.length--;
    var result = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return result;
  }
};

queueMethods.size = function() {
  return this.length;
};
