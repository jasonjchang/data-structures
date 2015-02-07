

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

Graph.prototype.contains = function(node){
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
      for(var j=0; j < this.container[i].edges.length; j++){
        if(this.container[i].edges[j] === toNode){
          return true;
        }
      }
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  for(var i=0; i < this.container.length; i++){
    if(this.container[i].key === fromNode){
      this.container[i].edges.push(toNode);
    }
  }
  for(var j=0; j < this.container.length; j++){
    if(this.container[j].key === toNode){
      this.container[j].edges.push(fromNode);
    }
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for(var i=0; i < this.container.length; i++){
    if(this.container[i].key === fromNode){
      for(var j=0; j < this.container[i].edges.length; j++){
        if(this.container[i].edges[j] === toNode){
          this.container[i].edges[j] = null;
        }
      }
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  for(var i=0; i < this.container.length; i++){
    cb.call(null,this.container[i].key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



