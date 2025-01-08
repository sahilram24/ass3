// for (let i = 1;i<=100;i++){
//     if(i %2 != 0){
//         console.log(i + " is a  Odd number");
//     }
//     else{
//         console.log( i + " isa  Even number");
//     }
// }
let num = prompt(parseInt("Enter the number: "));
let fact = 1;
while (num !=0) {
    if(num < 0){
        console.log("Error! Factorial of a negative number does not exist.");
    }
    else if(num === 0){
        console.log(`The factorial of ${num} is 1.`);
    }
    else{
    fact *= num;
    num--;
}
}