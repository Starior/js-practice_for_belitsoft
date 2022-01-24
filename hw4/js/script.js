// 1) Создайте функцию, которая рассчитает длину поезда
// let train = {
//      isLocomotive : true,
//      locomotiveLength  : 25,
//      locomotiveColor  : black, 
//      isFreightCar  : false,
//      freightСarLength  : 30,
//      isCoachCar  : true,
//      totalCoachCars : 9,
//      coachLength  : 20,
//  };
// Длина поезда складывается из имеющихся вагонов и их количества )

let train = {
  isLocomotive: true,
  locomotiveLength: 25,
  locomotiveColor: 'black',
  isFreightCar: false,
  freightСarLength: 30,
  isCoachCar: true,
  totalCoachCars: 9,
  coachLength: 20,
};

function calcTrainLength(train) {
  let trainLenght = 0;
  if (train.isLocomotive === true) {
    trainLenght += train.locomotiveLength;
  }
  if (train.isFreightCar === true) {
    trainLenght += train.freightСarLength * train.totalFreightСars; // так можно?
  }
  if (train.isCoachCar === true) {
    trainLenght += train.coachLength * train.totalCoachCars;
  }
  return trainLenght;
}
console.log('Длинна поезда: ' + calcTrainLength(train));


// 2) Создайте объект своей любимой машины, у которой будут свойства 
// (Марка, цвет, кол-во дверей, лошадиные силы, объем двигателя, механика\автомат) 
// и клонируете этот объект в другой объект с помощью двух способов, которые мы разбирали )

let myCar = {
  carBrand: 'Jeep',
  carColor: 'yellow',
  sumDoors: 4,
  maxPower: 268,
  engineDisplacement: 1998,
  TransmissionType: 'Automatic',
};

let yourCar = {};

for (key in myCar) {
  yourCar[key] = myCar[key];
}

console.log(yourCar);

let herCar = Object.assign({}, myCar);

console.log(herCar);


// 3) В объекте книга вывести в консоль ключи, если значение имеет булевский тип данных
// let book = {
//      numberOfPages : 545,
//      cover  : true,
//      isTheAuthorAlive  : false, 
//      isBestseller  : true,
//      booksEditions  : 20000000,
//  };

let book = {
  numberOfPages: 545,
  cover: true,
  isTheAuthorAlive: false,
  isBestseller: true,
  booksEditions: 20000000,
};

function booleanTypesInBook(book) {
  for (let key in book) {
    if (typeof(book[key]) === 'boolean')
      console.log(key)
  }
}
booleanTypesInBook(book);