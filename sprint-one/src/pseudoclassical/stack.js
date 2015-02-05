var Stack = function() {
    this.storage = {};
    this.length = 0;
};

Stack.prototype.push = function(value){
  //store length  key into obj - equate to value
  this.storage[this.length ] = value;
  //increment length  for next
  this.length++;
};

Stack.prototype.pop = function(){
  if(this.length >0){
    this.length--;
    var result = this.storage[this.length];
    delete this.storage[this.length];
    return result;
  }
};

Stack.prototype.size = function(){
  return this.length;
};





