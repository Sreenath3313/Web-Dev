function compoundInterest(p,r,t,n){
    amount =p*Math.pow((1+r/n),n*t);
    return amount;
}
CI = compoundInterest(10000,0.05,10,12);
console.log("Compound Interest is: "+CI);