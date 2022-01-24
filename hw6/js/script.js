// 1) Напишите функцию funcName( loremString ) , которая будет возвращать "true" если строка "loremString" содержит подстроки "lorem", "ipsum" и "amet"
// *строку loremString я буду вводить вручную при вызове функции
// ** Учтите случайное нажатие на CapsLock и случайный пробел в начале ;)
function findInString(str) {
  let testString = str.trim().toLowerCase();
  if (testString.includes('lorem') && testString.includes('ipsum') && testString.includes('amet')) {
    return true;
  }
  return false;
}
console.log(findInString('zloremsipsumkkkametsdf'))

// 2) Напишите функцию funcName(str), возвращающую строку str с заглавным первым символом.
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter('zloremsipsumkkkametsdf'));

// 3) Напишите функцию funcName(str, maxLength), которая будет проверять длину строки, и если длина превышает максимальное значение длины, сокращать до этого значения + "..."
let thirdString = 'zloremsipsumkkkametsdf';

function checkMaxLength(str, maxLength) {
  if (str.length > maxLength) {
    thirdString = thirdString.slice(0, maxLength) + '...';
  }
}
checkMaxLength(thirdString, 7);
console.log(thirdString);

// 4) 
let myLifeMotto = ["Я", "ничего", "не", "понимаю", "в", "JavaScript"];
// Задание - сделать так, чтобы девиз стал правдивым
// *ничего не делать для лохов
// ????
myLifeMotto.splice(1, 2, "что-то");


// 5) let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"] 
// Перебрать массив. Имена, содержащие подстроку "а", добавить в новый массив "teamA"; подстроку "H" в новый массив "teamH"
let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"];
let teamA = [];
let teamH = [];
harryPotterTeam.forEach((item) => {
  if (item.includes('a')) teamA.push(item)
  if (item.includes('H')) teamH.push(item)
});
console.log(harryPotterTeam);
console.log(teamA);
console.log(teamH);

// 6) let arr = [6, 3, "ten", 12, true, "4"]
// Получите и выведите в консоль сумму и произведение всех числовых значений данного массива
let arr = [6, 3, "ten", 12, true, "4"];
let sumArr = 0;
arr.forEach((item) => {
  // console.log(typeof(item))
  if (typeof(item) === 'number') {
    sumArr += item;
  }
})
console.log(sumArr);

// 7) let numArr = [1, 3, 5, 7, 9]
// Получить новый массив с квадратами этих чисел
let numArr = [1, 3, 5, 7, 9];
let powArr = [];
numArr.forEach((item) => {
  powArr.push(item * item);
})
console.log(powArr);