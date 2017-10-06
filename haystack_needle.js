//Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

//Solution1:
var strStr = function(haystack, needle) {
  if(haystack.indexOf(needle) !== -1){
  return haystack.indexOf(needle);
  }  else{
  return -1;
  }
};


//Solution2:
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};