function calculateCompoundInterest(principal, rate, time, n) {
    const amount = principal * Math.pow((1 + rate / n), n * time);
    const compoundInterest = amount - principal;
    return compoundInterest;
}

const principal = 1000;
const rate = 0.05;
const time = 2;
const n = 4;

const interest = calculateCompoundInterest(principal, rate, time, n);
console.log("Compound Interest:", interest.toFixed(2));