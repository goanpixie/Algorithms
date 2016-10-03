function MakeItBig(Arr){
  for (var i=0; i<Arr.length;i++){
    if (Arr[i]>0){
      Arr[i]="Big";
    }
  }
    return Arr;
  }
  
  console.log(MakeItBig([-1,2,4,-5,9]));