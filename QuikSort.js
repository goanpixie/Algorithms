var Arr=[];

function QuikSort(Arr,start,end){
  var pivot=Arr[0];
  var temp=pivot;
  start=0;
  end=Arr.length;
  for (var i=start;i<end;i++){
    console.log(Arr[i])
    if(Arr[i]<temp){
      Arr.unshift(Arr[i]);
      Arr.splice(i+1,1);
    }
  }
  return Arr;
} 

console.log(QuikSort([2,9,3,8,5,1],0,Arr.length))