// const isSuccsed = true;

// const myPromise = new Promise((result, reject) => {
//   setTimeout(() => {
//     if (isSuccsed) {
//       result(5);
//     } else {
//       reject("error - 404");
//     }
//   }, 2000);
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((result) => {
//       console.log(result);
//       return result + 10
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(console.log("delete spiner"));

// practice
/**
  Випадковий проміс
 Створіть функцію randomPromise, яка повертає проміс, 
який випадковим чином виконується або відхиляється.
 Використайте метод then, щоб обробити виконання проміса та 
вивести повідомлення "Проміс виконано".
 Використайте метод catch, щоб обробити помилку, якщо 
проміс відхиляється, і вивести повідомлення "Помилка проміса".
 Використайте метод finally для виведення повідомлення
"Робота з промісом завершена" незалежно від того, чи було виконання успішним, чи виникла помилка.
  Послідовний проміс
 Створіть функцію getRandomNumber, яка повертає проміс, 
що генерує випадкове число.
 Використайте метод then, щоб обробити результат першого проміса, 
додати до нього число 10 та вивести результат.
 Використайте метод catch, щоб обробити помилки у будь-якому 
з промісів та вивести повідомлення "Помилка проміса".
 Використайте метод finally для виведення повідомлення 
"Робота з промісом завершена" незалежно від того, чи було виконання успішним, чи виникла помилка.
 */

const makePromise = ({ value, delay, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
};

const promise1 = makePromise({ value: "a", delay: 2000 });
const promise2 = makePromise({ value: "b", delay: 1000 });
const promise3 = makePromise({ value: "c", delay: 1500 });

Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const pr4 = makePromise({ value: "1", delay: 1500, shouldResolve: false });
const pr5 = makePromise({ value: "2", delay: 2500 });
const pr6 = makePromise({ value: "3", delay: 2000 });
let data = 5
Promise.allSettled([pr4, pr5, pr6])
  .then((result) => {
  console.log(result);
data = result
  const markUp = result.map((item) => {
    return `<li> ${item.value ? item.value : item.reason}<li/>`;
  }).join("");

  document.body.innerHTML = markUp
    console.log(markUp);
  

});
console.log(data);
