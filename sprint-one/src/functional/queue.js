var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0,
      start = 0,
      key = 0;

  // Implement the methods below
  someInstance.enqueue = function(value){
    if(size >= 0){
      /*
      Algorithm expectations.
        //storage[0] = a
        //storage[1] = b
        //storage[2] = c

        //start = 0;
        //size = 4;

        //remove[0];

        //start = 1;
        //size = 3;

        //remove[1]

        //start = 2;
        //size = 2
      */
      storage[key] = value;
      size++;
      key++;
    }
  };

  someInstance.dequeue = function(){
    if(size > 0){
      size--;
      var result = storage[start];
      delete storage[start];
      start++;
      return result;

    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
