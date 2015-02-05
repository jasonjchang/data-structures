var Queue = function(){
    this.storage ={};
    this.length = 0;
    this.key = 0;
    this.start = 0;
};

Queue.prototype.enqueue = function(value){
   if(this.length >= 0){
    this.storage[this.key] = value;
    this.length++;
    this.key++;
  }
};

Queue.prototype.dequeue = function(){
  if(this.length > 0){
    this.length--;
    var result = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return result;
  }
};

Queue.prototype.size = function() {
  return this.length;
};
