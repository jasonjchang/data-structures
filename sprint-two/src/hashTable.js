var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
//k = string
//v = max - bucket size
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit); //produces hash
  var check = this.retrieve(i); // check if value is there
  if(check === undefined){
    return this._storage.set(i, v);
  } else if(Array.isArray(check)){
    return this._storage.set(i, check.push(v));
  } else {
    return this._storage.set(i, [check, v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);//produces hash
  var check = this._storage.get(i);
  if(Array.isArray(check)) {
    for(var j=0; j < check.length; j++) {
      if(check[j]===k) {
        return check[j];
      }
    }
  }
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);//produces hash
  return this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
