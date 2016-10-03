function Even_Odd(Arr) {
    var odd_count = 0;
    var even_count = 0;
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i] % 2 == 1) {
            odd_count++;
            if (odd_count > 2) {
                console.log("Thats odd");
                odd_count = 0;
            }
        }
        if (Arr[i] % 2 == 0) {
            even_count++;
            if (even_count > 2) {
                console.log("Thats even odd");
                even_count = 0;
            }
        }
    }
}

(Even_Odd([1, 3, 2, 5, 7, 9]));
