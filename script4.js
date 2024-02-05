//Продвинутая работа с функциями
/*1.Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n..*/
//С использованием цикла
function sumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(100)); // 5050 - DONE
//Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1
function sumTo2(n) {
  return n == 1 ? n : n + sumTo2(n - 1);
}

console.log(sumTo2(100)); // 5050 - DONE

/*2.Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n! Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6*/
function factorial(n) {
  return n == 1 ? n : n * factorial(n - 1);
}

console.log(factorial(5)); //120  - DONE

/*3.Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.*/
function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return n - 1 + fib(n - 2);
    //return fib(n-1)+ fib(n-2) - зависает
  }
}

console.log(fib(3)); // 2 - DONE
console.log(fib(7)); // 13 - DONE
console.log(fib(77)); // 5527939700884757: my result =1483
/*4.Напишите функцию printList(list), которая выводит элементы списка по одному.Сделайте два варианта решения: используя цикл и через рекурсию.*/
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
// function printList(list){
//   alert(list.value)
//   if(list.next){
//     printList(list.next)
//   }
// }
// printList(list) - DONE

/*5.Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.*/
// function printList(list){
//   if(list.next){
//     printList(list.next)
//   }
//   alert(list.value)
// }
// printList(list)// - DONE

/*6.Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.Да, именно таким образом, используя двойные круглые скобки (не опечатка). */
function sum(a) {
  return function (b) {
    return (sum = a + b);
  };
}
console.log(sum(1)(2)); //3 -DONE

/*7.У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.Сделайте набор «готовых к употреблению» фильтров:inBetween(a, b) – между a и b (включительно).inArray([...]) – находится в данном массиве.Они должны использоваться таким образом:*/
//arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
function inBetween(num1, num2) {
  return function f(x) {
    if (x <= num2 && x >= num1) {
      return (x = num1 - num2);
    }
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6))); //[3, 4, 5, 6] - DONE
//arr.filter(inArray([1,2,8])) – выбирает только элементы, совпадающие с одним из элементов массива
function inArray(arr) {
  return function (x) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
        return arr[i];
      }
    }
  };
}
let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1.filter(inArray([1, 2, 8]))); //[1, 2] - DONE

/*8.Напишите функцию byField, которая может быть использована для этого.// по имени (Ann, John, Pete).по возрасту (Pete, Ann, John)*/
function byField(fieldName) {
  return (a, b) => (a[fieldName] - b[fieldName] ? 1 : -1); //- DONE
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];



/*9.Следующий код создаёт массив из стрелков (shooters).Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…Почему у всех стрелков одинаковые номера?Почините код, чтобы он работал как задумано.*/
function makeArmy() {
  let shooters = [];
  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      return i;
    };
    shooters.push(shooter);
  }
  return shooters;
}

let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
console.log(army[0]()); // 0 - DONE
console.log(army[1]()); // 1 - DONE
console.log(army[2]()); // 2 - DONE

/*10.Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:
counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.*/
function makeCounter() {
  let count = 0;

 function counter(){
   return count++;
  }
  counter.set = value => count = value;
  counter.decrease = () => count--;

  return counter;
}
  
let counter = makeCounter();

console.log( counter() ); // 0 - DONE
console.log( counter() ); // 1 - DONE
counter.set(10); // установить новое значение счётчика
console.log( counter() ); // 10 - DONE
counter.decrease(); // уменьшить значение счётчика на 1
console.log( counter() ); // 10 (вместо 11) - DONE

/*11.Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.Сделайте два варианта решения.Используя setInterval.Используя рекурсивный setTimeout.*/
// function printNumbers(from, to){
//   let curNum = from
//   let showNum = setInterval(function(){
//     alert(curNum)
//     if(curNum === to){
//       clearInterval(showNum) 
//     } 
//     curNum++
//  },1000)
// }

// console.log(printNumbers(1, 5))//- DONE

// function printNumbers1(from, to){
//   let curNum = from
//   let showNum = setTimeout(function num(){
//     alert(curNum) 
//     showNum =setTimeout(num,1000);
//     if(curNum === to){
//       clearInterval(showNum) 
//     }
//     curNum++
//   },1000)
// }

// console.log(printNumbers1(2, 7))//- DONE - не уверена в решении и что это рекурсия


