//Variables: These are all of the elements you wish to interact
// on your page:





window.onload = init;
// When website loads
// it will initiate the following 
// "init" function...


// 1. Calculate Monthly Payment BUTTON (Click):

function init() {

        const homePrice = parseFloat(document.getElementById("homePrice").value);
        const downPayment = parseFloat(document.getElementById("downPayment").value);
        const loanTerm = parseFloat(document.getElementById("loanTerm").value);
        const interestRate = parseFloat(document.getElementById("interestRate").value);
        const result = parseFloat(document.getElementById("result").value);
        
        const principal = homePrice - downPayment;
        const monthlyInterestRate = (interestRate / 100) / 12;
        const numberOfPayments = loanTerm * 12;
        const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
        const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
        const monthlyPayment = principal * (numerator / denominator);
    
        
        result.value = "$" + monthlyPayment;
        
    }

console.log("the index.js has finished executing..."); // Final end Message in the console