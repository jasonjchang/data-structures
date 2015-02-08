var BinarySearchTree = function(value){
  var root = Object.create(BinarySearchTree.prototype);
  root.value = value;
  root.right = null;
  root.left = null;
  return root;
};
BinarySearchTree.prototype.insert = function(value){
  var node = BinarySearchTree(value);
  //if input node < root
  if(this.value > value){
    if(this.left === null){
      return this.left = node;
    } else {
      this.left.insert(value);
    }
  }
  if(this.value < value){
    if(this.right === null){
      return this.right = node;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value){
  // if statement root value is equal to contains value.
    // return true
  //else
  //check !null
    // check if the value is greater than the root value
      // if it is greater run contains the right property
    // if the value is less than the root value
      //if it is less than value, run contains on left property
  // return false
  if(this.value === value) {
    return true
  } else {
    if(this.value > value && this.left !== null) {
      return this.left.contains(value);
    } else if (this.value < value && this.right !== null) {
      return this.right.contains(value);
    }
  }
  return false;
};


BinarySearchTree.prototype.depthFirstLog = function(fun){
//if this.left !== null
  //this.left.depthFirstLog then call function with this.value
//if this.right !== null
  //this.right.depthFirstLog then call function
  if(this.value !== undefined){
    fun.call(null, this.value);
  }
  if(this.left !== null) {
    this.left.depthFirstLog(fun);
  }
  if(this.right !== null) {
    this.right.depthFirstLog(fun);
  }
};

//worth hi-chews
BinarySearchTree.prototype.breadthFirstLog = function(){

};
//worth lots of hi-chews
BinarySearchTree.prototype.rebalanceTree = function(){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
