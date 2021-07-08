console.log ("Hello World");

// alert("hello")
// Data Types
/*
    Number
    String
    Boolean
    Null
    Undefined
*/

//************Variables ********************//

let variable

let age = 50 

let name = "Ashish Pokhrel"

console.log(age)
console.log (name)

console.log(name + " is currently " + age + " years old" ) //It will convert into string. We can concatinate.

//let vs var vs const

var carPrice = 2000
let carPrice2 = 3000
const carPrice3 = 4000

console.log(carPrice, carPrice2, carPrice3);

// Difference: When to Use them

//Var --> can be redeclared and update. ; function bhitra decalre garera bahira use garna milcha

var firstName ="rita"
var firstName = "sita"

console.log(firstName);

//Let ---> function bhitra declare bhayeko bahira use garna mildaina; can re updated but not redeclared

let secondName = "pokhrel"
secondName ="regmi"
// let secondName ="poudel"

console.log(secondName);

//const --> function bhitra declare bhayeko bahira use garna mildaina; can not updated  not redeclared

const middleName = "lal"
// const middleName ="bahadur"

//************Comments********************//
    //
    /*
    Hello How are you !
    */


//************Operator ********************//

/* + - * / 
Assignment Operator--> = 
Equiry ---> test to see if the values are equal, returns true or false (===)
Not, Doesnot Equal to  --> !, !==
*/

var odd = 18 + 4

console.log(odd);

//************Conditionals ********************//

// if...else

if (odd % 2 === 0){     //MOdulus Operaotor gives reminder
    console.log("It is Even")
}
else{
    console.log("It is odd")
}

//************Functions ********************//

function addMultiply (num1, num2, num3){
    const add = num1 + num2
    const multipy = add * num3
    return multipy
}

const ans = addMultiply(1,2,3)
console.log("The Output is " + ans);

// Arrow Function

const addMultiply2 = (a1, a2) => ans2 = a1 +a2

console.log(addMultiply2(5, 5))

//************Loop ********************//
for (var i = 0; i< 5; i++){
    console.log("JavaScript WOrkshop By JS Community")
}

var array = [1, 2, 3, 4, 5]

for (var j=0; j<5; j++){
    console.log(array[j]);
}

//************Objects********************//

var myObject = {} // empty object with no properties and methods

var person = {
    firstName: "arun",
    lastName: " singh",
    age: 7,
    education: "B.E.",
    getName: () => person.firstName + person.lastName

}


// accessing Object PRoperties 

console.log(person.lastName);

// accessing Object Methods

console.log(person.getName())















