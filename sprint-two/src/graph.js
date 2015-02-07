

var Graph = function(){
  this.container = []
};

Graph.prototype.addNode = function(node){
  var obj = {
    key : node,
    edges : []
  };
  this.container.push(obj);
};

Graph.prototype.contains = f unction(node){
    for(var i=0; i<this.container.length; i++){
      if(this.container[i].key === node){
        return true;
      }
    }
    return false;
};

Graph.prototype.removeNode = function(node){
  if(this.container.length > 0) {
    for(var i=0; i<this.container.length;i++){
      if(this.container[i].key === node){
        this.container.splice(i, 1);
      }
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  //two objects to see if they have same edges
  //fromNode.key === toNode.edges

  //arguments as keystrings
  for(var i=0; i < this.container.length; i++){
    if(this.container[i].key === fromNode) {
      if(this.container[i].edges.indexOf(toNode) > -1){
        return true;
      }
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  for(var i)
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



