"use strict";

//Variables: These are all of the elements you wish to interact
// on your page:

//Home Price textbox
const homePrice        = document.getElementById("homePrice");
//Down Payment textbox
const downPayment      = document.getElementById("downPayment");
//Loan Term textbox
const loanTerm         = document.getElementById("loanTerm");
//Interest Rate
const interestRate     = document.getElementById("interestRate");


window.onload = init;
// When website loads
// it will initiate the following 
// "init" function...


// 1. Calculate Monthly Payment BUTTON (Click):

function init() {

calculateMortgage.onclick
}

function calculateMortgage() {
  
    const principal = homePrice - downPayment;
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;
  
    const x = Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const monthlyPayment = (principal*x*monthlyInterestRate)/(x-1);
    
    const resultElement = document.getElementById("result");

    resultElement.innerHTML = ${monthlyPayment.toFixed(2)};
    
  }
  