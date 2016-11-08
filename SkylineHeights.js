// You are at street level(0), given array of building height which are one behind another, return an array containing only visible buildings:

function SkylineHeights(Arr){
  var Arr2=[];
  var Max=0;
  for (var i=0;i<Arr.length;i++){
    if(Arr[i]>Max){
      Arr2.push(Arr[i]);
      Max=Arr[i];
    }
  }
  return Arr2;
}
console.log(SkylineHeights([-1,1,1,1,7,3]))