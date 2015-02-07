var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
  /*
  var node = {
    value : value,
    //left : null,
    //right: null,
  }
  */
  var node = Tree(value);
  this.children.push(node);

};

treeMethods.contains = function(target){
  //recurse function
  var recurse = function(node) {
    //end of the line
    if(node.value === target){
      return true;
    }
    //take in children and recurse over the children
    for(var i=0; i < node.children.length; i++){
      if(recurse(node.children[i])){
        return true;
      }
      //formula : recurse(this.children[i]);
      //ouput: recurse(this.children[0]);
      //ouput: recurse(this.chidren[0].children[0]); //branch ends
      //ouput: recurse(this.children[1]);
      //ouput: recurse(this.children[1].children[0]); // branch ends
    }
    return false;
  };
  return recurse(this);
};
  /*
  if(this.children.length > 0){
    for(var i=0; i < this.children.length; i++){
      if(this.children[i].value === target) {
        return true;
      }
    }
  }



/*
 * Complexity: What is the time complexity of the above functions?
 */
