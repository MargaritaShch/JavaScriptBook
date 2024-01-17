//ТИПЫ ДАННЫХ

//1.Можно ли добавить свойство строке?
//Примитивы не согут хранить в себе доп.данные - DONE
let str = "Привет";
str.test = 5;
console.log(str.test);//undefined  - DONE

/*2.Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.*/
//  const firstNum = +prompt('Add first num:','')
//  const secondNum = + prompt('Add second num:','')
//  const sum = firstNum+secondNum;
//  console.log(sum)// - DONE

//3.почему в примере ниже 6.35 округляется до 6.3?
console.log( 6.35.toFixed(1) ); // 6.3: toFixed(1) - убирает последнее число 6.35, получается 6.3, так как js имеет свою специфику:
console.log(6.3.toFixed(20))//6.29999999999999982236 - таким образом метод toFixed округляет до блидайшего числа, поэтому результат 6.3  - DONE
//Как правильно округлить 6.35?
console.log(Math.round(6.35 *10)/10)//6.4 - DONE

/*4.Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.Функция должна возвращать числовое значение.Tакже надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.*/
// function readNumber(num){
//     //запускаем цикл покторый будет выполнятся пока
//     while(true){
//         let addNum = prompt('Add number', '');
//         //пользователь не нажмет отмена
//         if(addNum === '' || addNum === null){
//             console.log('Cancel');
//             return null;
//         }
//         addNum = +addNum;
//         if(!isNaN(addNum)){
//             //или не введет верное число
//             if(addNum === num){
//                 console.log('Right');
//                 return addNum;
//                 //если неверно запрос продолжается
//             } else{
//                 console.log('Try again');
//             }
//             //в случае если вводимое значение не является числом , вернуть ошибку и продолжить запрос
//         } else{
//             console.log("Error. You should add only number")
//         } 
//     } 
// }

// console.log(readNumber(3))// - DONE

/*5.Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1.Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).*/
function random(min, max){
    let result = min + Math.random()*max-min;
    return result
}

console.log(random(3, 10))//- DONE
console.log(random(3, 10))//- DONE
console.log(random(3, 10))//- DONE

/*6.Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).Любое число из интервала min..max должно появляться с одинаковой вероятностью. */

function randomInteger(min, max){
    return Math.ceil(Math.random()*((max+1)-min))
}

console.log(randomInteger(1,5))//- DONE
console.log(randomInteger(1,5))//- DONE
console.log(randomInteger(1,5))//- DONE

/*7.Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.*/
function ucFirst(str){
    if (str[0].toLowerCase()){
        return `${str[0].toUpperCase()}${str.slice(1, str.lenght)}`;
        
    }
}
console.log(ucFirst("вася"))//Вася - DONE
console.log(ucFirst("jhon"))//Jhon - DONE

/*8.Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.Функция должна быть нечувствительна к регистру*/
function checkSpam(str){
    let newStr = str.toLowerCase();

    if(newStr.includes('viagra') || newStr.includes('XXX'.toLowerCase())){
        return true
    } else{
        return false
    }
}

console.log(checkSpam('buy ViAgRA now'))//true - DONE
console.log(checkSpam('free xxxxx'))//true - DONE
console.log(checkSpam("innocent rabbit"))//false - DONE
console.log(checkSpam('fr XxXxx'))//true - DONE

/*9.Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка. */
function truncate(str, maxlength){
    return (str.length > maxlength) ?
      str.slice(0,maxlength-1)+ '...' : str
    }
   


console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))//Вот, что мне хотело...-DONE
console.log(truncate("Всем привет!", 20))//Всем привет! - DONE

/*10.Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число. Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.*/
function extractCurrencyValue(str){
    //c позиции 1 и до конца
   return +str.slice(1)
}

console.log(extractCurrencyValue('$120'))//120 - DONE

//*11. Давайте произведём 5 операций с массивом..
//Создайте массив styles с элементами «Джаз» и «Блюз»
let styles =["Джаз","Блюз"];
console.log(styles)//Джаз, Блюз - DONE
//Добавьте «Рок-н-ролл» в конец.
styles.push('Рок-н-ролл');
console.log(styles)//Джаз, Блюз, Рок-н-ролл - DONE
//Замените значение в середине на «Классика».Ваш код для поиска значения в середине должен работать для массивов с любой длиной
styles[Math.floor((styles.length-1)/2)] ='Классика';
console.log(styles)//Джаз, Классика, Рок-н-ролл - DONE
//Удалите первый элемент массива и покажите его
styles.shift()
console.log(styles)//Классика, Рок-н-ролл  - DONE
//Вставьте Рэп и Регги в начало массива.
styles.unshift('Рэп', 'Регги')
console.log(styles)//Рэп, Регги, Классика, Рок-н-ролл - DONE

/*12.Напишите функцию sumInput(), которая:Просит пользователя ввести значения, используя prompt и сохраняет их в массив.Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».Подсчитывает и возвращает сумму элементов массива.P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/
// function sumInput(){
//     let arr = [];
//     while(true){
//         let addValue = prompt('Add number', '')
        
//         if(isNaN(addValue) || addValue === '' || addValue === null) break;
//         arr.push(+addValue)
//     } 
//     let sum =0;
//     for(let i = 0; i<arr.length; i++){
//         sum +=arr[i]
//     }
//     return sum
// }
// console.log(sumInput())//- DONE

/*13.На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.Функция getMaxSubSum(arr) должна возвращать эту сумму.*/

function getMaxSubSum(arr){
    let sum = 0;

}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));