//ОБЪЕКТЫ: ОСНОВЫ

/*1.Напишите код, выполнив задание из каждого пункта отдельной строкой:*/
//Создайте пустой объект user.
let user = {};
//Добавьте свойство name со значением John.
user.name = "John";
//Добавьте свойство surname со значением Smith.
user.surname = "Smith";
console.log(user)//{name: 'John', surname: 'Smith'} - DONE
//Измените значение свойства name на Pete.
user.name = "Pete";
console.log(user)//{name: 'Pete', surname: 'Smith'} - DONE
//Удалите свойство name из объекта.
delete user.name;
console.log(user)//{surname: 'Smith'} - DONE

//2.Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
function isEmpty(obj){
   for(let key in obj){
    //если цикл начнет выполняться
    return false
   }
   return true
}

let schedule = {};
console.log(isEmpty(schedule))//true - DONE
schedule["8:30"] = "get up";
console.log(isEmpty(schedule))//false -  DONE

//3.Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
//Да, св-ва объекта моно изменить -  DONE
const user1 = {
    name: "John"
  };
// это будет работать? - ДА -  DONE
user1.name = "Pete";
console.log(user1)//{name: 'Pete'} -  DONE

/*4.У нас есть объект, в котором хранятся зарплаты нашей команды.Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.Если объект salaries пуст, то результат должен быть 0.*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for(let key in salaries){
  sum += salaries[key]
}

console.log(sum)//390 - DONE

/*5.Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2. */
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof (obj[key]) == 'number'){
            obj[key]*=2
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
console.log(multiplyNumeric(menu));
console.log(menu)//{width: 400, height: 600, title: 'My menu'} - DONE

/*6.Создайте объект calculator (калькулятор) с тремя методами:
read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат. */

// const calculator = {
//     read(){
//         //+ - указываем для преобразования в число, через prompt - читаем введенное занчение
//      this.a = +prompt('Add first num ',0);
//      this.b = +prompt('Add second num',0);
//     },
//     sum() {
//       return  this.a + this.b
//     },
//     mul() {
//       return  this.a * this.b
//     }
// }//- DONE

// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );

/*7.У нас есть объект ladder (лестница), который позволяет подниматься и спускаться. Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0 
Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:  ladder.up().up().down().showStep().down().showStep();*/
// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;// возвращает ссылку на объект для цепочки вызовов
//     },
//     down() {
//       this.step--;
//       return this; // возвращает ссылку на объект для цепочки вызовов
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//       return this;// возвращает ссылку на объект для цепочки вызовов
//     }
//   };

//   ladder.up().up().down().showStep().down().showStep();- DONE

//8.Возможно ли создать функции A и B, чтобы new A() == new B()?
//ДА, если ссылка в функциях на один и тот же объект - DONE
let obj = {};
function A() { return obj }
function B() { return obj }

let a = new A();
let b = new B();

console.log( a == b );//true - DONE

/*9.Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств. */
// function Calculator() {

//     this.read = function(){
//     //+ - указываем для преобразования в число, через prompt - читаем введенное занчение
//         this.a = +prompt('Add first num ',0);
//         this.b = +prompt('Add second num',0);
//     };

//     this.sum = function() {
//         return  this.a + this.b
//     };

//     this.mul = function() {
//         return  this.a * this.b
//     }
// }

// let calculator = new Calculator();
// calculator.read();

// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );

/*10.Создайте функцию-конструктор Accumulator(startingValue).Объект, который она создаёт, должен уметь следующее:Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.*/

function Accumulator(startingValue){
    this.value = startingValue

    this.read = function(){
        this.value += +prompt('Add num',0)
    }
}
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

console.log(accumulator.value); // выведет сумму этих значений - DONE

/*11.Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.*/
function Calculator(){
    this.calculate = function(str){
      let arr =  str.split(' ');
      let a = +arr[0]
      let sign = arr[1]
      let b = +arr[2]
      return this[sign](a,b)
    }

    this.addMethod = function(name, func){
      this[name] = func
    }

    this["+"] = function(a,b){
      return a + b
    }
    this["-"] = function(a,b){
      return a - b
    }
}

let calc = new Calculator;
console.log( calc.calculate("3 + 7") ); 

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result );