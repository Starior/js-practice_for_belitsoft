// 1)[1, 2, 3, 4, 5] и ['Text', 'Audio', 'Video']. Объедините два массива в один
// В полученном массиве измените порядок на обратный
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['Text', 'Audio', 'Video'];
let arr3 = arr1.concat(arr2).reverse();
console.log(arr3);

// 2)
let dumbledoresArmy = [
  { age: 15, name: "Harry", wasThere: true },
  { age: 16, name: "Draco", wasThere: false },
  { age: 15, name: "Ronald", wasThere: true },
  { age: 17, name: "Luna", wasThere: true },
  { age: 16, name: "Crabbe", wasThere: false },
  { age: 16, name: "Hermione", wasThere: true },
  { age: 15, name: "Neville", wasThere: true },
];
// 2.1 Получите средний возраст всех участников(!) отряда 
function calcMediumAge(array) {
  let sumAges = 0;
  let participants = array.filter(item => item.wasThere)
  participants.forEach(element => sumAges += element.age);
  return sumAges / participants.length;
}
console.log(calcMediumAge(dumbledoresArmy));

// 2.2 Преобразовать только в массив имен
dumbledoresArmyNames = dumbledoresArmy.map(item => item.name);
console.log(dumbledoresArmyNames);

// 3) 
let arr = [14, 15, 1, -10, -8, 0, 12, -11];
// 3.1 Скопировать в переменную arrCopy и отсортировать массив в порядке возрастания
let arrCopy = arr.sort((a, b) => a - b);
console.log(arrCopy);
// 3.2 Отсортировать массив так, чтобы остались только отрицательные числа. Затем расположить их в порядке убывания 
let arrCopy2 = arr.filter(item => item < 0).sort((a, b) => b - a);
console.log(arrCopy2);
// 3.3 Возвести в квадрат каждый элемент массива, затем расположить по возрастанию, а потом вывести все строкой 
let arrCopy3 = arr.map((item) => item * item).sort((a, b) => a - b).join(', ');
console.log(arrCopy3);

// 4) 
let numbers = [44, 35, 76, 2, 65, 71, 3, 55, 76];
// 4.1 Вывести значения всех элементов массива и их индексы:
// Индекс 0 - число 44
numbers.forEach((item, index) => {
    console.log(`Индекс ${index} - число ${item}`);
  })
  // 4.2 Вывести на экран максимальное число массива
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
console.log(getMaxOfArray(numbers));
// 4.3 Определить индекс максимального числа массива (или индексы, если число встречается более одного раза)
function getIndexesMaxOfArray(array) {
  let maxValue = getMaxOfArray(array);
  array.forEach((item, index) => {
    if (item === maxValue)
      console.log(`Индекс максимального числа массива - ${index}`);
  })
}
getIndexesMaxOfArray(numbers);
// 5) 
let students = [
    { name: 'John', id: 123, marks: 9 },
    { name: 'Kate', id: 101, marks: 5 },
    { name: 'Olya', id: 200, marks: 7 },
    { name: 'Dan', id: 115, marks: 10 }
  ]
  // 1.1 Выведите массив имен в верхнем регистре
console.log(students.map((item) => item.name.toLocaleUpperCase()));
// 2.1 Создайте массив, куда будут добавлены только оценки стедентов, а затем посчитайте их средний балл 
let studentsScores = students.map((item) => item.marks);

function calcMediumScore(array) {
  let sum = array.reduce((sum, nextElement) => sum + nextElement);
  return sum / array.length;
}
console.log(calcMediumScore(studentsScores));
// 6) 
let arrayOfNumber = [1, 2, 3, 0, 12, 1, 3]
  // определить сколько первых элементов нужно сложить, чтобы сумма была больше 10
let sumOfNumbers = 0;
for (i = 0; i < arrayOfNumber.length; i++) {
  sumOfNumbers += arrayOfNumber[i];
  if (sumOfNumbers > 10) {
    console.log(`Сумма первых ${i+1} элементов больше 10`);
    break;
  }
}


// 7) 
// https://learn.javascript.ru/task/array-get-names
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name);
console.log(names);

// https://learn.javascript.ru/task/map-objects
let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [vasya2, petya2, masha2];

let usersMapped = users2.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
console.log(usersMapped);