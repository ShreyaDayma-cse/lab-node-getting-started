class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a-b)
    this.length = this.length+1
  }
  get(val) {
    if(this.items.indexOf(val) == -1 ){
      throw new Error('OutOfBounds')
    }
    else{
      return(this.items.indexOf(val))
    }
  }
  max() {
    if(this.items.length<=0){
      throw new Error('EmptySortedList');
    }
    else{
      return this.items[this.items.length-1]
    }

  }
  min() {
    if(this.items.length<=0){
      throw new Error('EmptySortedList');
    }
    else{
      return this.items[0]
    }

  }
  avg() {
    if(this.items.length > 0)
      return this.sum() / this.items.length
    else
      throw new Error('EmptySortedList')    
   
  }

  sum() {
    if(this.items.length >0)
    return this.items.reduce((acc, item) => acc = acc + item, 0)
  else 
    return 0
  }
  
};

module.exports = SortedList;
