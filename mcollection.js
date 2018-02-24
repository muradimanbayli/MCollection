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
}
