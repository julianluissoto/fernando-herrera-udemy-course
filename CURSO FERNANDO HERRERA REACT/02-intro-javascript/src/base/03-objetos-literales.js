const person = {
  name: "tony",
  lastName: "stark",
  age: 45,
  address: {
    city: "new York",
    zipCode: 445445,
    latitud: 14.45454,
    longitud: 15.4545,
  },
};

console.log(person);

const person2 = { ...person }; // this way copy the person values but not the reference
// so it create a new objet on a new memory slot

person2.name = "Peter";
person2.lastName = "Parker";
console.log(person2);
console.log(person);
