//Write a function that takes in a string and returns it when reversed
//let food = "eating"

function reverseString(string) {
  return string.split("").reverse().join("");
}

let food = "eating";
let reversedString = reverseString(food);
console.log(reversedString); 

//Write a function that takes in the following array and consoles the target if it is found else null

function findTarget(arr,target){
  let leftIndex =0;
  let rightIndex = arr.length-1;

  while (leftIndex <= rightIndex){
    let middle =Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middle] ===target) {
      return middle
    }
    else if (arr[middle] > target) {
   rightIndex = middle -1

    }
    else{
      leftIndex = middle +1
    }
  }
  return null

}

let num = [2,8,0,23,5,45,76];
let target = 23;
console.log(findTarget(num,target));


//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”


//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

// let num2 = 100;
// let sum = 0;

// for(let i=0; i%3===0; i++){
//   console.log(Buzz);
  
//   else if(i%5===0){
//     console.log(FizzBuzz);

//   }
//   else(i%15===0);{
//     console.log(FizzBuzz);

//   }

// }


//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.


function multiplyArray(numArray){
  let arrayMultilplied = numArray.map((num) =>{
    return num *4;
  })
  return  arrayMultilplied


}
let numArray = [12,87,45,75,23,64,73]
let arrayMultilplied = multiplyArray(numArray)
console.log(arrayMultilplied);



//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]

 

































































