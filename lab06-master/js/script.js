// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;


// COLLECT VALUES FROM THE USER
while (true){
    
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
    
    if (!isNaN(investment)){
        break;
    }
    else{
        investment = alert('Invalid. The amout should be a number.');
        continue;
    }

}

while (true){
    
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
    
    if (!isNaN(investment) && rate > 0 && rate < 10){
        break;
    }
    else{
        rate = alert('Invalid. The rate should be more than 0 and less than 10.');
        continue;
    }

}

while (true){
    
    years = parseInt(prompt('Enter the number of years you want to invest for'));
    
    if (!isNaN(years) && years >= 1 && years <= 30){
        break;
    }
    else{
        years = alert('Invalid. The number shold be between 1 and 30.');
        continue;
    }

}

console.log(`Investment: $${investment.toFixed(2)}  Rate: ${rate}%  Years: ${years}`);


// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);