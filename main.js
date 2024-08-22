//ternary operator//
var marks = 75;
var result = marks > 40 ? "pass" : "fail";
console.log(result);
var day = "sunday";
var day7 = day ? "is it a 7th day" : "or it is a last day of week";
console.log(day7);
//number guessing game//
var number = 45;
var guess = 36;
if (guess > number) {
    console.log("your number is to high");
}
else if (guess < number) {
    console.log("your number is to low");
}
else {
    console.log("congratulation you are right");
}
//switch case//
var marks1 = 45;
switch (marks) {
    case 65:
        console.log("your number is to high");
        break;
    case 36:
        console.log("your number is to low");
        break;
    case 45:
        console.log("congrats you are right");
}
//ternary operators// 
var marks2 = 45;
var result1 = marks2 > 36 ? "your num is to high" : "your num is to low";
console.log(result1);
//BMI calculator//
var weight = 70;
var height = 5.5;
var BMI = weight / (height * height);
console.log("bushra your bmi is ".concat(BMI));
