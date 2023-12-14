console.log("msg from scripts.js");

console.log("animal: " + animal);

//PRIMITIVE TYPE
//number, string, boolean
var animal; //declaration
animal = "dog";  //initialization / assignment

//two special value
//undefined - value not found
//null - value intentionally set to nothing

var anotherAnimal = "cat"; //declaration and initialization

let animal2 = "dog2";
animal2 = 3.131415926535;
console.log("animal2: " + animal2);
//must use let/const for project

/*console.log("animal3: " + animal3);*/

const animal3 = "dog2";
//const: value can not be changed after initialization



//REFERENCE TYPE
//object, array, function
//reference types constant can be changed
const MY_OBJECT = { key: "value", key2: "value2", name: "Charlie", age: "40"};
//similar to key-value pairs
MY_OBJECT.name = "Zhang";
console.log("MY_OBJECT: " + MY_OBJECT.name);
MY_OBJECT["name"] = "Liu";
console.log("MY_OBJECT: " + MY_OBJECT.name);

const MY_ARRAY = [1,2,3,4,5];
const MY_ARRAY2 = [1, "2", true, { name : "Charlie"}, [1,2,3,4,5]];
const MY_ARRAY3 = MY_ARRAY;

MY_ARRAY3[0] = 100;

console.log("MY_ARRAY: " + MY_ARRAY[0]);      //output: 100
console.log("MY_ARRAY: " + MY_ARRAY3[0]);     //output: 100



//FUNCTIONS
function introduceMySelf(name) {
    console.log("Hi, my name is: " + name);  //string concatenation
}
introduceMySelf("Charlie");

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addTwoNumbers(1, 2));

// arrow functions
// const + name + 
const addTwoNumbers2 = (num1, num2) => {
    console.log("final result" + num1 + num2);
    return num1 + num2;
};
addTwoNumbers2(1,2);

//one line arrow function
//defensive programming
//dont need return
const addTwoNumbers3 = (num1, num2) => num1 + num2;
console.log("addTwoNumber3", + addTwoNumbers3(1,2));

//Comparisons Operators
// == vs ===
// == checks for value
// === - checks for value and type
console.log("1 == 1", 1 == 1);              //true
console.log("1 == '1'", 1 == "1");          //true
console.log("1 === '1'", 1 === "1");        //false
console.log("1 == true", 1 == true);        //true
//Number(true) -> 1; Number(false) -> 0
console.log("1 === true", 1 === true);      //false

console.log("2 == true", 2 == true);        //false
//always use ===


//IIFE - immediately invoked function expression
//group code together
//avoid polluting global namespace
//scope - where variables are accessible
//runs as soon as it is defined
(function() {
    const SECRET = "12344423";
    console.log("IIFE", SECRET); 
})();

(function() {
    console.log("IIFE2");
})();


//CALLBACK function
//function that are passed into other functions
// Higher Order Functions - functions that take in other functions are parameters;
function bark(sound) {
    sound();
    /*console.log("bark");*/
}

bark(() => {
    console.log("meow meow");
});

bark(function () {
    console.log("meow meow");
});
