function doorsopen(N){
  var status=[];
  var count =0;
  for(var i=0;i< N;i++){
    count++;
    for(var j=0;j<N/count;j+=count){
      if(status[j]==null){
        status.push(0);
      }
      else if(status[j+i]==1){
      status.splice(j+i,1,0)
      }
      else{
      status.splice(j+i,1,1)
      }
    }
  }
  
  return status.toString().match(/0/g).length;
}
console.log(doorsopen(5));