//Продвинутая работа с функциями
/*1.Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n..*/
//С использованием цикла 
function sumTo(n) { 
    let sum=0;
    for(let i =0; i <=n; i++){
        sum +=i;
    }
    return sum
}
console.log(sumTo(100)); // 5050 - DONE
//Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1
function sumTo2(n) { 
    return n==1 ?n : n+sumTo2(n-1)    
}

console.log(sumTo2(100));// 5050 - DONE

/*2.Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n! Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6*/
function factorial(n){
    return n==1 ? n : n*factorial(n-1)
}

console.log(factorial(5));//120  - DONE

/*3.Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.*/
function fib(n) { 
  if(n<=1){
    return n
  }  else{
    return n-1+ fib(n-2)
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
        next: null
      }
    }
  }
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
function sum(a){
  return function (b){
    return sum = a+b
  }
}
console.log( sum(1)(2) )//3 -DONE
