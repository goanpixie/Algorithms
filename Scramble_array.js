// Scramble an array:

//Solution
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        console.log("i",i);
        
        j = Math.floor(Math.random() * (i + 1));
        console.log("j",j)
        
        x = a[i];
        console.log("x",x);
        
        a[i] = a[j];
        console.log("a[i]",a[i]);
        
        a[j] = x;
        console.log("a[j]",a[j]);
    }
    return a;
}

console.log(shuffle([3,0,3,4]));