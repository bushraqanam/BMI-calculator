//ternary operator//
let marks = 75
let result = marks>40?"pass":"fail"
console.log(result)
let day = "sunday"
let day7 = day?"is it a 7th day":"or it is a last day of week"
console.log(day7)
//number guessing game//
let number = 45
let guess = 36
if(guess>number){
console.log("your number is to high")

}
else if(guess<number){
    console.log("your number is to low")
}
else{
 console.log("congratulation you are right")

}
//switch case//
let marks1:number = 45
switch(marks){
    case 65 :
    console.log("your number is to high")
    break;
    case 36:
        console.log("your number is to low")
        break;
        case 45:
            console.log("congrats you are right")
            
}        
//ternary operators// 
let marks2 = 45
let result1 = marks2>36?"your num is to high":"your num is to low"
console.log(result1)

//BMI calculator//
let weight = 70
let height = 5.5
let BMI = weight/ (height*height)
console.log(`bushra your bmi is ${BMI}`)
            
