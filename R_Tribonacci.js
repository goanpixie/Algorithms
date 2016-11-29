
var Tri = function(n) {
    if(n <= 2) {
        return 1;
    } else {
        return Tri(n - 1) + Tri(n - 2) +Tri(n-3);
    }
};
console.log(Tri(6))
