//Find Longest common prefix:


var longestCommonPrefix = function(strs) {
    if(strs == null || strs.length == 0) return "";
    var a1 = strs[0];
    for(var i = 1 ; i<strs.length ; i++){
        var str = strs[i];
        var j = 0;
        for(; j < a1.length ; j++){
           if(a1[j] != str.charAt(j)){
                break;
           } 
        }
        a1 = a1.slice(0,j);
    }
    return a1;
};