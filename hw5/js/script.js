// 1) function animal(obj){
//   return ?
// } 
// Напишите код, который возвращает строку..
// "This 
// black cat has 4 legs"
// ..из объекта 
// {name:"cat", legs:4, color:"black"}

function animal(obj) {
  return `This \n${obj.color} ${obj.name} has ${obj.legs} legs`
}

let myCat = {
  name: "cat",
  legs: 4,
  color: "black"
}

console.log(animal(myCat));

// 2) Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

function Calculator() {
  this.firstValue = undefined;
  this.secondValue = undefined;


  this.read = function() {
      this.firstValue = +prompt("Введите первое значение");
      this.secondValue = +prompt("Введите второе значение");
    },
    this.sum = function() {
      return this.firstValue + this.secondValue;
    },
    this.mul = function() {
      return this.firstValue * this.secondValue;
    }
}
let calculator = new Calculator("Вася");

console.log(calculator);

console.log(calculator.sum());
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator);