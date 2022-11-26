/* let input = 'Петров Иван Степанович';

let array = input.split(' '); // ['Петров', 'Иван', 'Степанович']
console.log(array);

 let lastName = array[0];
let name = array[1];
let secondName = array[2]; 

// let [lastName, name, secondName] = input.split(' ');

function hi([, name, secondName]) {
    console.log(`Привет, меня зовут ${name} ${secondName}`);
}

// hi(input.split(' '))

let user = {
    lastName: 'Петров', 
    name: 'Иван',
    secondName: 'Степанович'
};

let { name, lastName, secondName } = user;

console.log(`Добрый день, ${user.name} ${user.secondName}`)


let arr = [1, 2, 3];

sum = 0;
for (let key of arr) {
    sum += key; // sum = 0+1 =1+2 = 3 + 3 = 6
}

console.log(sum);

*/

// Задание 1
let arr = [1, 2, 3];
console.log(arr);

//Задание 2
let result = 0;
for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}
console.log(result);

//Задание 3
arr.push(4, 5);

// Задание 4

let user = {
    lastName: 'Иванов', 
    name: 'Иван',
    age: 43
};

let { name, lastName, age } = user;

console.log(`Имя: ${user.name}`)
console.log(`Фамилия: ${user.lastName}`)
console.log(`Возраст: ${user.age}`)