function ArrayList(){
   var dataElements=[];
   var removeByIndex=function(index){
     if(index<0 || index>=dataElements.length){
       throw "ArrayIndexOutOfBoundsException:"+index;
     }
     dataElements.splice(index,1);
   }
   this.add=function(index,item){
     if(arguments.length==2){
       dataElements.splice(index, 0, item);
     }else if(arguments.length==1){
        item=index;
        dataElements[dataElements.length]=item;
     }else{
       throw "InvalidParameterException:add";
     }
     return true;
   }
   this.addAll=function(index,collection){
     if(arguments.length==2){
       if(collection instanceof ArrayList){
         for (var i = 0; i < collection.size(); i++) {
            this.add(index,collection.get(i));
         }
       }
     }else if(arguments.length==1){
       collection=index;
       if(collection instanceof ArrayList){
         for (var i = 0; i < collection.size(); i++) {
            this.add(collection.get(i));
         }
       }
     }else{
       throw "InvalidParameterException:add";
     }
     return true;
  }
   this.get=function(index){
      if(index<0 || index>=dataElements.length){
        throw "ArrayIndexOutOfBoundsException:"+index;
      }
      return dataElements[index];
   }
   this.remove=function(object){
     var objectIndex;
     if(typeof object==="number"){
       objectIndex=object;
     }else{
       objectIndex=dataElements.indexOf(object);
     }
     removeByIndex(objectIndex);
     return true;
   }
   this.toString=function(){
     return dataElements.toString();
   }
   this.size=function(){
     return dataElements.length;
   }
   this.isEmpty=function(){
     return dataElements.length==0;
   }
   this.clear=function(){
     dataElements=[];
   }
   this.toArray=function(){
     return dataElements;
   }
   this.set=function(index,item){
      dataElements[index]=item;
   }
   this.contains=function(item){
      return dataElements.indexOf(item)>-1;
   }
   this.indexOf=function(item){
     return dataElements.indexOf(item);
   }
   this.lastIndexOf=function(item){
     throw "Unsupported"
   }
   this.removeAll=function(collection){
     for (var i = 0; i < collection.size(); i++) {
        this.remove(collection.get(i));
     }
   }
   this.sort=function(comparator){
     throw "Unsupported"
   }
   this.subList=function(fromIndex,toIndex){
     if(toIndex>this.size() || fromIndex<0){
       throw "ArrayIndexOutOfBoundsException";
     }
     var list=new ArrayList();
     for (var i = fromIndex; i < toIndex; i++) {
         list.add(this.get(i));
     }
     return list;
   }
}
function Map(){
  var dataElements={};

  this.put=function(key,value){
    dataElements[key]=value;
  }
  this.get=function(key) {
    return dataElements[key];
  }
  this.clear=function(){
    dataElements={};
  }
  this.containsKey=function(key){
      return dataElements[key]!=undefined;
  }
  this.containsValue=function(value){
    return this.values().indexOf(value)>-1;
  }
  this.equals=function(collection){
     if(!(collection instanceof Map)){
       return false;
     }
     if(collection.size()!=this.size()){
       return false;
     }

     var keys=collection.keySet();
     for (var i = 0; i < collection.size(); i++) {
        if(this.get(keys[i])!=collection.get(keys[i])){
          return false;
        }
     }
     return true;
  }
  this.getOrDefault=function(key,defaultValue){
    var value=this.get(key);
     if(value===undefined){
        return defaultValue;
     }else{
       return value;
     }
  }
  this.isEmpty=function(){
    return this.keySet().length==0;
  }
  this.keySet=function(){
    return Object.keys(dataElements);
  }
  this.putAll=function(collection){
     if(collection instanceof Map){
        var keys=collection.keySet();
        for (var i = 0; i < keys.length; i++) {
           this.put(keys[i],collection.get(keys[i]));
        }
     }
  }
  this.remove=function(key){
    delete dataElements[key];
  }
  this.size=function(){
    return this.keySet().length;
  }
  this.values=function(){
    return Object.values(dataElements);
  }
}
