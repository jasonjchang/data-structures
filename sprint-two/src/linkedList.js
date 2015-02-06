var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.tail === null) {
      var start = Node(value);
      list.head = start;
      list.tail = start;
    } else {
      list.head = list.tail;
      list.tail = Node(value);
      list.head.next = list.tail.value;
    }
  };

  list.removeHead = function(){
    var temp = list.head;
    delete list.head;
    list.head = list.tail;
    return temp.value;
  };

  list.contains = function(target){
    for(var key in list) {
      for(var nodekey in list[key]) {
        if(target === list[key][nodekey])
          return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
