var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  //state size/length
  var size = 0

  // Implement the methods below
  someInstance.push = function(value){
    //store size key into obj - equate to value
    storage[size] = value;
    //increment size for next
    size++;
  };

  someInstance.pop = function(){
    //only executes when size is greater than 0
    if(size > 0) {
      size--;
      //capture result
      var result = storage[size];

      //var result = storage[1];

      //delete last key-value pair
      delete storage[size];

      //decrease size
      //return something
      return result;
    }
    //poor man's if statement
    //size && size--;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
