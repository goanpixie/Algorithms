const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const transportation = data.reduce(function(obj, item){
      if(!obj[item]){
        obj[item]=0
      }
      obj[item]++;
      return obj;
    },{});
    console.log(transportation)