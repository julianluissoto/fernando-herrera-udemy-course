const name = "julian";
const lastName = "soto";

const fullName = `my name is ${name} ${lastName}`;

function getSaludo(name, lastName) {
  return `hi ${name} ${lastName}`;
}

console.log(getSaludo(name, lastName));
console.log(fullName);
