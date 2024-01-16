//Основы JavaScriptHELLO WORLD 

//1. alert() - выплывающее окно
// alert('Я JavaScript!') //DONE
console.log("Я JavaScript!") //DONE

/*2. Возьмите решение предыдущей задачи Вызвать alert, и измените его. Извлеките содержимое скрипта во внешний файл alert.js(script.js), лежащий в той же папке.Откройте страницу, убедитесь, что оповещение работает.*/
//<script src="script.js"></script> - DONE

/*3.Объявите две переменные: admin и name.Запишите строку "Джон" в переменную name.Скопируйте значение из переменной name в admin.Выведите на экран значение admin, используя функцию alert(console.log) (должна показать «Джон»).*/
let admin;
let name = "Джон";
admin = name;
console.log(admin) //DONE

/*4.Создайте переменную для названия нашей планеты. Как бы вы её назвали? Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?*/
const ourPlanet = 'Earth'; //DONE
const currentUser = 'Jhon'; //DONE

//5. Что выведет этот скрипт?
let name1 = "Ilya";

console.log( `hello ${1}` ); // hello 1 - DONE
console.log( `hello ${"name"}` ); // hello name - DONE
console.log( `hello ${name1}` ); // hello Ilya - DONE

//6.Создайте страницу, которая спрашивает имя у пользователя и выводит его.
// let askQuestion = prompt('What is your name?','')
// alert(askQuestion)// DONE

//7.Чему будут равны переменные a, b, c и d в примере ниже?
let a = 1, b = 1;
let c = ++a; // 2 - DONE
let d = b++; // 1 - DONE

//8.Какой результат будет у выражений ниже?
let a1 ="" + 1 + 0//10 - DONE
let b2 = "" - 1 + 0//-1 - DONE
let c1=true + false// 1 - - DONE, because true = 1, false = 0: 1+0
let d1=6 / "3"//2 - DONE
let e = "2" * "3"//6 - DONE
let f = 4 + 5 + "px"//9px -DONE, becuse слодение цифр идет первым
let g ="$" + 4 + 5//$45 - DONE
let h ="4" - 2//2- DONE
let i ="4px" - 2//NAN - DONE
let j ="  -9  " + 5//-9 5 - DONE, конкатенация
let k ="  -9  " - 5//14 -DONE
let l =null + 1//1 - DONE, because null =0
let m =undefined + 1//NAN - DONE,
let n =" \t \n" - 2//-2 - DONE

/*9.Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
В чём ошибка? Исправьте её. Результат должен быть 3. */
let num1 = 1
let num2 = 2
// let a2 = prompt("Первое число?", num1);
// let b3 = prompt("Второе число?", num2);
// alert(+a2 + +b3); // 3 - DONE

//10.Каким будет результат этих выражений?
let aa = 5 > 4//true - DONE
let aa2= "ананас" > "яблоко"// false - DONE: a<я
let aa3="2" > "12"//true
let aa4=undefined == null//true
let aa5=undefined === null//false
let aa6=null == "\n0\n"//false - DONE: undefined == null - only
let aa7=null === +"\n0\n"//true
let expr1 = "apple" < "orange"; // true
let expr2 = 0 == false; // true
let expr3 = "false" == false; // false
let expr4 = null >= 0; // true
let expr5 = !(2 === "2"); // true
let expr6 = !("5" !== 5); // true
let expr7 = "hello" != "world"; //true 
let expr8 = NaN === NaN; // false
let expr9 = (true + false) > 0; //true
let expr10 = ("2" + 2) == "22"; // true

//11.Выведется ли alert?
if ("0") {
    // alert( 'Привет' );
}//ДА, любая строка кроме пустой возвращает true - DONE

/*12.Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“ Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!» */

// let viewPromt = prompt("Какое официальное название JavaScript?", '')
// if(viewPromt === "ECMAScript"){
//     //  alert('Верно')
// } else{
//     //  alert ('Не знаете? “ECMAScript”!')
// }// DONE

/*13.Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа. */
// let viewPromt2 = prompt('number', '')
// if(viewPromt2>0){
//   alert(1)
// } else if(viewPromt2<0){
//     alert(-1)
// } else{
//     alert(0)
// } //DONE

/*14.Перепишите if..else с использованием нескольких операторов '?'.Для читаемости рекомендуется разбить код на несколько строк.let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}*/
// let login = prompt('User:', '')
// let message = (login == 'Сотрудник') ?  'Привет':
//     (login == 'Директор') ? 'Здравствуйте':
//     (login == '') ? 'Нет логина':
//     '';
// console.log(message)// 

//15.Что выведет код ниже?
console.log( null || 2 || undefined )// 2 - DONE
// console.log(( alert(1) || 2 || alert(3) ))//1,затем 2 - DONE
console.log(1 && null && 2 )//null
// console.log(alert(1) && alert(2))// 
console.log(null || 2 && 3 || 4)//

let value = NaN;
value &&= 10;//NaN
value ||= 20;//NaN
value &&= 30;//30
value ||= 40;
console.log(value)//30 -DONE

/*16.Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
«Включительно» означает, что значение переменной age может быть равно 14 или 90. */
// if(age >=14 && age<=90){}// DONE

/*17.Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.*/
// if(!(age >=14 && age<=90)){}//DONE
// if(age<14 || age>90){}//DONE

/*18.Какие из перечисленных ниже alert выполнятся?Какие конкретно значения будут результатами выражений в условиях if(...)? */
// if (-1 || 0) alert( 'first' ); любое значение отличное от 0 это true - выполнится - DONE
// if (-1 && 0) alert( 'second' );резульат false - не выполнится - DONE
// if (null || -1 && 1) alert( 'third' );//выполнение && = true, далее true, так как \\находит первое истинное - выполнится - DONE

/*19.Напишите код, который будет спрашивать логин с помощью prompt.Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».Пароль проверять так:
Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене или в случае если ничего не введено – «Отменено». */
// let viewPromt3 = prompt('Кто там?', '')

// if(viewPromt3 === 'Админ'){
//     let loginPrompt = prompt('Пароль?', '')
//     if(loginPrompt === 'Я Главный'){
//         alert('Здравствуйте!')
//     } else if(loginPrompt === '' || loginPrompt === null){
//         alert('Отменено')
//     } else{
//         alert('Неверный пароль')
//     }

// } else if(viewPromt3 === '' || viewPromt3 === null){
//     alert("Отменено")
// } else{
//     alert("Я вас не знаю")
// } //DONE

//20.Какое последнее значение выведет этот код? Почему?
let i1 = 3;
while (i1) {
    console.log( i1-- );
  }//Result = 1, так как дойдя до 0 утвердление будет ложным

/*21.Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.Оба цикла выводят alert с одинаковыми значениями или нет?*/
let i2 = 0;
while (++i2 < 5) 
console.log( i2 );//1,2,3,4 - DONE

let i3 = 0;
while (i3++ < 5) 
console.log( i3 );//1,2,3,4,5 - DONE

/*22.Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.Оба цикла выведут alert с одинаковыми значениями или нет?*/
for (let i4 = 0; i4 < 5; i4++) 
console.log( i4 );//1,2,3,4 - DONE

for (let i5 = 0; i5 < 5; ++i5) 
console.log( i5 );//1,2,3,4 - DONE

//23.При помощи цикла for выведите чётные числа от 2 до 10.
for(let i6 = 2; i6<11; i6++)
console.log(i6)//- DONE

/*24.репишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
 ;
}*/
let i7 =0;
while(i7 <3){
    console.log( `number ${i7}!` )
    i7++
}//- DONE

/*25.Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно. */

// let num;
// do{
//    num = prompt('Введите число больше 100', 0)
// }while(num <=100 && num)

/*26.Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.Напишите код, который выводит все простые числа из интервала от 2 до n.Для n = 10 результат должен быть 2,3,5,7.P.S. Код также должен легко модифицироваться для любых других интервалов. */

function evenNum(n){
    let result =[]
    for(let i = 2; i<n; i++){
        if(i%2===0){
           result.push(i)
        }
    }
    return result
}
console.log(evenNum(10))//result = [2, 4, 6, 8] - Done

/*27.Напишите if..else, соответствующий следующему switch:
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}*/
// let browser = prompt('Choose your browes','');
// if(browser === 'Edge'){
//     console.log("You've got the Edge!" )
// } else if(browser === 'Chrome' || browser === 'Safari'|| browser === 'Opera' ){
//     console.log('Okay we support these browsers too' )
// } else{
//     console.log('We hope that this page looks ok!' )
// }//DONE

/*28.Перепишите код с использованием одной конструкции switch: 
const number = +prompt('Введите число между 0 и 3', '');
if (number === 0) {
  alert('Вы ввели число 0');
}
if (number === 1) {
  alert('Вы ввели число 1');
}
if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}*/

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number){
//     case 0:
//         console.log('Вы ввели число 0')
//         break;
//     case 1:
//         console.log('Вы ввели число 1')
//         break;
//     case 2:
//     case 3:
//         console.log('Вы ввели число 2, а может и 3')
//         break;2

//         default:
//             console.log('Undefined')
// }//DONE

/*29.Следующая функция возвращает true, если параметр age больше 18.В ином случае она задаёт вопрос confirm и возвращает его результат.Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.Сделайте два варианта функции checkAge:1.Используя оператор ? 2.Используя оператор || 
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}*/
function checkAge(age){
    return (age > 18) ? true: 'Родители разрешили?';
}
console.log(checkAge(19))//true - DONE
console.log(checkAge(17))//Родители разрешили? - DONE

function checkAge2(age){
    return age > 18 ||'Родители разрешили?';
}
console.log(checkAge2(20))//true - DONE
console.log(checkAge2(16))//Родители разрешили? - DONE

//30.Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
function min(numFirst, numSecond){
    return numFirst< numSecond ? numFirst:numSecond;
}
console.log(min(2, 5))//2 - DONE
console.log(min(3, -1))//-1 - DONE
console.log(min(1, 1) )//1 - DONE

//31.Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
function pow(x,n){
    let result =0
    if(x <0 || n<0 || n%1 !== 0 || x%1 !==0){
     result ='Functuon suppurts only natural or integrs numbers'
      
    } else{
        result = x**n
    }
    return result
}
console.log(pow(3, 2))//9- DONE
console.log(pow(3, 3))//27- DONE
console.log(pow(1, 100))//1- DONE
console.log(pow(1, -100))//Functuon suppurts only natural numbers - DONE
console.log(pow(-3, 3.5))//Functuon suppurts only natural numbers - DONE
console.log(pow(3.5, 3))//Functuon suppurts only natural numbers - DONE

/*32.Замените код Function Expression стрелочной функцией:
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);*/
// let ask =(question, yes, no)=>{
//     if (confirm(question)) yes()
//     else no()  
// }

// ask(
//     "Вы согласны?",
//     () => { alert("Вы согласились."); },
//     () => { alert("Вы отменили выполнение."); }
//   );//DONE