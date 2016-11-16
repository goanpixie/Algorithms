function getFrequency(string) {
    var dict={};
    for(var i=0;i<string.length;i++){
      var frequency= string.charAt(i);
      if(dict[frequency]){
        dict[frequency]++;
      }
      else dict[frequency]=1;
    }
    return dict;
};

console.log(getFrequency("bbvhjvjhvbhjv"))