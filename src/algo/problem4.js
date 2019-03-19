module.exports = function () {
    var checkPallendrome = function (num) {
        if (num == createPallendrome(num))
            return true;
        else
            return false;
    }

    var createPallendrome = function (n) {
        var digits = findReverseDigits(n);
        var num = 0;
        
        for (var i = 0; i < digits.length; i++) {
            var temp = digits.length - 1 - i;
            num += digits[i] * (10 ** temp);
        }

        return num;
    }

    var findReverseDigits = function(num) {
        var digits = [];

        while (num > 0) {
            temp = num % 10;
            digits.push(temp);
            num = Math.trunc(num/10);
        }

        return digits;
    }

    var a = 100;
    var b = 100;
    var big = 0;

    while (a <= 999) {
        while (b <= 999) {
            prod = a * b;
            if (checkPallendrome(prod) && (createPallendrome(prod) > big)) 
            {
                big = prod;
            }
            b += 1;
        }
        a += 1;
        b = 100;
    }

    return big;
}