var weight = prompt("What is your weight?");
var height = prompt("What is your height?")

function bmiCalculator(weight, height){
    var bmi = weight / Math.pow(height,2);
    return Math.round(bmi);
}

var BMI = bmiCalculator(weight, height);

if(BMI < 18.5){
    alert("Your BMI is " + BMI +", so you are underweight");
}

if(BMI >= 18.5 && BMI<=24.9){
    alert("Your BMI is " + BMI + ",so you have a normal weight");
}

if(BMI > 24.9){
    alert("Your BMI is "+ BMI +",so you are overweight");
}

