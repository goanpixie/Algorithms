//How to build a HashMap:

//Solution:
function HashTable(size){
 this.buckets = Array(size);
 this.numBuckets = this.buckets.length;
 }
  
 function HashNode(key, value, next){
   this.key = key;
   this.value = value;
   this.next = next || null;
 }
  
  
 HashTable.prototype.hash = function(key){
   var total = 0;
   for (var i=0; i<key.length; i++){
     total+=key.charCodeAt(i);
   }
   var bucket = total % this.numBuckets;
return bucket;
}
  
  
 HashTable.prototype.insert = function(key, value){
   var index =this.hash(key);
   if(!this.buckets[index]){
     this.buckets[index] = new HashNode(key,value);
   }
   else if(this.buckets[index].key===key){
     this.buckets[index].value = value;
     return;
   }
   else{
     var currentNode = this.buckets[index];
     while(currentNode.next){
       if(currentNode.key===key){
         currentNode.value=value;
         return;
       }
       if(currentNode.next.key===key){
         currentNode.next.value = value;
         return;
       }
       currentNode = currentNode.next;
     }
     currentNode.next = new HashNode(key, value);
   }
 }
  
  
 HashTable.prototype.get=function(key){
   var index = this.hash(key);
   if(!this.buckets[index]) return null;
   else{
     var currentNode = this.buckets[index];
     while(currentNode){
                       if(currentNode.key===key) return currentNode.value;
                       currentNode = currentNode.next;
                      }
        }
   return null;
 }
  
  
  
 HashTable.prototype.retrieveAll = function(){
   var theList = [];
   var i;
   for(i=0; i<this.numBuckets; i++){
     currentNode = this.buckets[i];
     while(currentNode){
    theList.push(currentNode);
         currentNode = currentNode.next;
     }
   }
   return theList;
 }
  
  
  
  
  
  
  
  
  
  
  
  
 var myHT = new HashTable(30);
 myHT.insert('Dean','dean@gmail.com');
 myHT.insert('Megan','megan@gmail.com');
 myHT.insert('Daen','deneme@gmail.com');
 myHT.insert('Dean','testtest@gmail.com');
   
// console.log(myHT.buckets);
 
// console.log(myHT.get('Dean'));
 
console.log(myHT.retrieveAll());
console.log(myHT.get('Megan'));