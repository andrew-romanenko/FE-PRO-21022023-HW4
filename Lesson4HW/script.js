/* Напишіть функцію map(fn, array), яка приймає на вхід функцію та масив, 
та обробляє кожен елемент масиву цією функцією, повертаючи новий масив.*/

let arr = [10, 15.1, 20, 25.2, 30, 35.3, 40, 45.4, 50, 55.5];

function roundNumber(number) {
   let newArr = [];
    for (let i = 0; i <= arr.length; i++) {
        if (number[i] % 10 === 0) {
            newArr.push(number[i]);
        }
    }
    document.write("Цілі числа: " + newArr);
}

function map(fn, array) {
    return fn(array);
}

map(roundNumber, arr)