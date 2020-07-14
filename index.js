console.log('hello world');
let name='jack';
console.log(name);

//for declearing the constant

const intrestRate=0.3;
//you can not change const data if you try this an error will ocur
console.log(intrestRate);

let firstname='mukesh';
let gae=30;
let isApproved=false;
let lastname=undefined;
let selectcolor=null;

//object

let person={
    name: 'mosh',
    age :21
};
//dot notation
console.log(person);

person.name='sinny';
console.log(person);

//bracket notation

person['name']='donny';
console.log(person);

//array


let selectedColor=['red','blue']
console.log(selectedColor);
console.log(selectedColor[0]);
console.log(selectedColor.length);



//function

function greet(name){
    console.log('hello '+ name);
}
greet('john');

 function square(number){
return number*number;
 
 }

 console.log(square(2));