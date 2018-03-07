var VATCalculator = /** @class */ (function () {
    function VATCalculator() {
    }
    VATCalculator.prototype.calculate = function (number) {
        var value;
        value = number * 1.25;
        return value;
    };
    return VATCalculator;
}());
var vat = new VATCalculator;
console.log(vat.calculate(100));
