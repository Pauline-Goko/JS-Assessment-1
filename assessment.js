//Write a function that takes in a string and returns it when reversed
//let food = "eating"

function reverseString(string) {
  let y = string.split("").reverse().join("");
  return y

}

let food = "eating";
// let reversedString = reverseString(food);
console.log(reverseString(food)); 



//Write a function that takes in the following array and consoles the target if it is found else null
function sortTarget(array){
  if(array.length<=1){
      return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0,middle);
  let right = array.slice(middle);
  console.log("left", left);
  console.log("right", right);
  return sortedTag (sortTarget(left), sortTarget(right))
}
function sortedTag(left,right){
  let emptyArray = [];
  while(left.length && right.length){
      console.log("right2", right);
      console.log("left2", left);
      if(right[0] < left[0]){
          emptyArray.push(right.shift());
      }
      else{
          emptyArray.push(left.shift());
      }
     
  }
  console.log("emptyArray", emptyArray);
  return [...emptyArray,...left,...right]

}
    
function findTarget(arr,target){
  let leftIndex =0;
  let rightIndex = arr.length-1;

  while (leftIndex <= rightIndex){
    let middle =Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middle] ===target) {
      return target
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


  for(let n = 2000; n<=2023; n++){
    if(n%4===0){
      console.log(n + " is a leap year")
    }
    else{
      console.log(n + " is not a leap year")
    }
  }



//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

for(let x = 0; x<=100; x++){
  if(x%3==0 && x%5==0){
    console.log("FizzBuzz");
  }
  else if(x%3==0){
    console.log("Fizz")
  }
  else if(x%5==0){
    console.log("Buzz");
  }
  else{
    console.log(x);
  }
}

//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.


function multiplyArray(numArray){
  let arrayMultilplied = numArray.map((num) =>{
    return num *4;
  })
  return  arrayMultilplied


}
let numArray = [12,87,45,75,23,64,73]
console.log(multiplyArray(numArray));



//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]

function turnNumbers(string){
  let newNumbers = string.map((x)=>{
    return Number(x);
  })
  return newNumbers

}

let nums = ["10","24", "45","56","67"]
// let newNumbers = turnNumbers(nums);
console.log(turnNumbers(nums));




 

































































