//const priceEl = 3;
//const priceEr = 7;
//const total = priceEl + priceEr;

//document.write(`this is total:` + total);

//const x = "John" + " " + "Doe";
//document.write(x);


// let first = parseFloat(prompt('write the first number'));
// let second = parseFloat(prompt('write the second number'));
// let third = parseFloat(prompt('write the third number'));

// document.writeln(`Quadratic equation: a * x * x + b * x + c = 0 `);
// document.write("<br>");


// function quadratic(a,b,c) {
//     let D = b * b - 4 * a * c ; 
//         if (D < 0) {
//             return 'There is no solution';
//         } if (D == 0){ 
//             let x  = -b / 2 * a;
//             return 'The only one solution' + x;
//         } if (D > 0) {
//             let x1 = -b + Math.sqrt(D) / (2 * a);
//             let x2 = -b - Math.sqrt(D) / (2 * a);
//             return 'Your result: x1= '+ x1 + 
//             'Your result: x2= ' + x2;
//         }
// }

// document.writeln(quadratic(first,second,third));

// let p1 = 16;
// let p2 = 13;

// function myFunction(p1 , p2){
//     return p1 * p2;
// }

// document.write( 'this is number' + myFunction(p1, p2));

// var x = myFunction(8,9);
// document.write(x);
// function myFunction (a, b){
//     return a*b;
// }

// document.write ('blabla bla bla' +myFunction(77)+ 'blabla bla bla');
// function myFunction(number){
//     return (5/7 * number);
// }

// const priceOrange = 230;
// function calculateOrangePrice(priceOrange){
//     const added = 40; 
//     return priceOrange+added;
// }

// document.write(calculateOrangePrice(priceOrange));

// let fruits = {yellow : "banana", green: "apple", red:"grapefruit"};

// document.write (fruits.green);
// document.write(fruits["red"]);

// var person = {
//     firstName:"Orest",
//     lastName: "Boria",
//     id: 0932,
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// }
//     document.write(person.fullName());
    
// let text = "abracadabra";
// document.write(text.length);

// let smth ="the rule \"Vikings\" from blabla";

// let x = 'It\'s alright.';
 
// const dore = "The chapter \\ is called";

// document.write(smth + x + dore);

// var z= "john";
// var y= new String ("john");

// var x = function (a , b) {
//     return a * b;
// }

// document.write(x(4, 5));

// let myFunction = new Function( "a", "b", "return a * b");
// document.write(myFunction(4,3));

// function myFunction(){
//   var rent = document.getElementById("demo").innerHTML;
//   var ext = rent.replace("winter", "summer");
//   document.getElementById("demo").innerHTML = ext;
// }

function myFunction(){
    var text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = text.toUpperCase();
}