const array = [];
array.push(1);
array.push(2);
array.push(3);

// it not recomedable to push value on the array cause this modified the original array

const array2 = [...array, 4]; // one way to make a copy of the array
const array3 = array.map((e) => e); // another way of making  a copy of the array
console.log(array);
console.log(array2);
console.log(array3);
console.log(array === array3);
