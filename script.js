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

// 1. Promise.all()

const promise1 = makePromise({ value: "a", delay: 2000 });
const promise2 = makePromise({ value: "b", delay: 1000 });
const promise3 = makePromise({ value: "c", delay: 1500 });

Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log("Promise.all:", result);
  })
  .catch((error) => {
    console.log("Promise.all error:", error);
  });

// 2. Promise.allSettled()

const pr4 = makePromise({
  value: "1",
  delay: 1500,
  shouldResolve: false,
});

const pr5 = makePromise({ value: "2", delay: 2500 });
const pr6 = makePromise({ value: "3", delay: 2000 });

let data = 5;

Promise.allSettled([pr4, pr5, pr6]).then((result) => {
  console.log("Promise.allSettled:", result);

  data = result;

  const markUp = result
    .map((item) => {
      return `<li>${item.value ?? item.reason}</li>`;
    })
    .join("");

  document.body.innerHTML += markUp;

  console.log("HTML:", markUp);
  console.log("Data:", data);
});

console.log("Initial data:", data);

// 3. Promise.race()

const race1 = makePromise({ value: "a", delay: 2000 });
const race2 = makePromise({ value: "b", delay: 1000 });
const race3 = makePromise({ value: "c", delay: 1500 });

Promise.race([race1, race2, race3])
  .then((result) => {
    console.log("Promise.race:", result);
  })
  .catch((error) => {
    console.log("Promise.race error:", error);
  });

// 4. Promise.any()

const any1 = makePromise({
  value: "a",
  delay: 1000,
  shouldResolve: false,
});

const any2 = makePromise({
  value: "b",
  delay: 2000,
  shouldResolve: true,
});

const any3 = makePromise({
  value: "c",
  delay: 1500,
  shouldResolve: true,
});

Promise.any([any1, any2, any3])
  .then((result) => {
    console.log("Promise.any:", result);
  })
  .catch((error) => {
    console.log("Promise.any error:", error);
  });
