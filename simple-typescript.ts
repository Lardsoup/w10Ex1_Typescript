interface IVATCalculator
{
    calculate(amount: number): number;
}

class VATCalculator implements IVATCalculator
{
    calculate(number)
    {
        let value;
        value = number * 1.25;
        return value;
    }
}

const vat: IVATCalculator = new VATCalculator;
console.log(vat.calculate(100));