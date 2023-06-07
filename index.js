// var num1 = Number(prompt("Enter your table"));
// var num2 = Number(prompt("Enter your table length"));

// for(var i = 1; i<=num2; i++){
//     const res = i*num1;
//     document.write(num1 + " * " + i + " = " + res + " <br> ")
// }


// var obj = {
//      name:"sam",
//      class: 10,
//      email: "abc@.com"
// }


// for(var key in obj){
//     document.write(key + " : " + obj[key] + " <br>")
// }

// q no 1

// var text = ("Inciter tech");
// for(var i = 1; i <=5; i++){
//     document.write( text + "<br>")
// }

// q no 2

// for(var i = 1; i <=5; i++){
//     document.write( i + "<br>")
// }

// q no 3

// var num = Number(prompt("enter your number"));
// sum = 0
// for(var i =1; i<=num; i++){
// sum += i
// document.write("sum of natural numbers;  " + sum)

// q no 3

// var number = Number(prompt("enter number"));

// let sum = 0;

// for(i = 0; i <= number; i++){
  
//   sum = sum + i;
// }

// console.log("sum of  "+ number + " natural numbers is:" + sum);

// q no 4

// var even = [6, 11, 2 , 9 ,10 ,13];
// function printNum(){
// var i = 0;
// for(i =0;i<even.length; i++){
//     if(i%2 == 0){
//         console.log(even[i])
//     }
// }};
// printNum();


//  q no 5


// let arr = [1, 2, 3, 4, 6, 7, 9];
// function deleteEl(){
//     arr.splice(0, arr.length);

// }
// deleteEl(arr);
// console.log(arr)


//  q no 6

// let num = [1, 2, 3, 4,5];
// for(let i=0; i< num.length; i++){
//     setTimeout(() => {
//         console.log(num[i])
//     }, 1000)
// }


// q no 7


// function powOfNum(num , pow){
//     val = 1;
//     for(var i=0; i<pow; i++){
//       val =val* num;
//     }
//     return val;
//   }
  
//   console.log(powOfNum(2,2))
 

//  q no 8 

// for (var i = 1; i <= 8; i++) {
//     for (var ind = 1; ind <= i; ind++) {
      
//       document.write(ind);
//     }
//     document.write(" <br />");
//   }

//  q no 9
var number = 12345;
function countDigits() {
  let digitCount = 0;

  while (number > 0) {
    digitCount++;
    number = Math.floor(number / 10);
  }

  return digitCount;
}

// console.log(countDigits())
//  q n0 10

  let arr = [5, 10, 20, 3, 98, 100 ,95];
      let largest = arr[0];
  for(let i = 0; i<arr.length; i++){
    if(arr[i] > largest){
      largest = arr[i]
    }
  }
  // console.log(largest)