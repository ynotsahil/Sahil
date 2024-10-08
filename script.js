document.getElementById('calculate-btn').addEventListener('click', function() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value);
    const loanTerm = parseFloat(document.getElementById('loan-term').value);
  
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
      alert("Please fill out all fields correctly.");
      return;
    }
  
    // Monthly Interest Rate
    const monthlyInterestRate = (interestRate / 100) / 12;
  
    // Total Number of Payments
    const totalPayments = loanTerm * 12;
  
    // Monthly Payment Calculation (P * r * (1 + r)^n) / ((1 + r)^n - 1)
    const x = Math.pow(1 + monthlyInterestRate, totalPayments);
    const monthlyPayment = (loanAmount * monthlyInterestRate * x) / (x - 1);
  
    // Total Payment and Interest
    const totalPayment = monthlyPayment * totalPayments;
    const totalInterest = totalPayment - loanAmount;
  
    document.getElementById('monthly-payment').textContent = Monthly Payment: $${monthlyPayment.toFixed(2)};
    document.getElementById('total-payment').textContent = Total Payment: $${totalPayment.toFixed(2)};
    document.getElementById('total-interest').textContent = Total Interest: $${totalInterest.toFixed(2)};
  });