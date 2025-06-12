const fruits = ["apple" , "banana" , "cherry"];
// Accessing elements
console.log(fruits[0]);
console.log(fruits[1]);

// Updatingg elements
fruits[2]="blueberry";
console.log(fruits);

// find the number of elements

console.log(fruits.length);


// dynamic arrays in javascript

fruits.push("orange");
console.log(fruits);

fruits.unshift("strawberry")
console.log(fruits);


// removing elements

fruits.pop();//removing the elements from the end
console.log(fruits);


fruits.shift();//removing the elements from the first
console.log(fruits);


// commen algorithms

for(let i=0 ; i<fruits.length ; i++){
    console.log(fruits[i]);
}
// insertimg

fruits.splice(2,0,"kiwi");
console.log(fruits);

// deleting

fruits.splice(1,1);
console.log(fruits);
