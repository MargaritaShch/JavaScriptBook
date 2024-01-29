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
    //вывод суммы
    let sum = 0;
    //вывод максимальной суммы элементов
    let maxSum = 0;
    //проходимся по массиву
    for(num of arr){
        //к макс сумме добавляем эл-ты массива
        maxSum +=num;
        //находим максимальную сумму: т.е. есть arr = [1, -2, 3, 4, -9, 6] => 
        //num =1; sum =1; maxSun = 1 => Math.max(1,1)
        //num =-2; sum =1; maxSum = -1 => Math.max(1,-1)
        //num =3; sum = 1; maxSum = 4 => Math.max(1,4)
        //num =4; sum = 4; maxSum =8 => Math.max(4,8)
        //num =-9; sum =8; maxSum = -1 => Math.max(8,-1)
        //num =6; sum =9; maxSum =15 => Math.max(9,15)
       sum = Math.max(sum,maxSum)
       //отбрасывем все отрицательные суммы
       if(maxSum <0){
        maxSum=0
       }
    }
    return sum
}

console.log(getMaxSubSum([-1, 2, 3, -9]));//5 -DONE
console.log(getMaxSubSum([2, -1, 2, 3, -9]));//6 -DONE
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));//11  -DONE
console.log(getMaxSubSum([-2, -1, 1, 2]));//3 -DONE
console.log(getMaxSubSum([100, -9, 2, -3, 5]));//100 -DONE
console.log(getMaxSubSum([1, 2, 3]));//6 -DONE

/*14.Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString». То есть дефисы удаляются, а все слова после них получают заглавную букву.*/
function camelize(str){
    //если слово 1 оставитт без изменений, если нет, первую букву каждого последующего слова делать большой, начиная со второй буквы всатвляется остаток слова до конца
    let newStr = str.split('-')
    .map((word, index) =>
    index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('')

    return newStr;
}

console.log(camelize("background-color"));//backgroundColor - DONE
console.log(camelize("list-style-image"));//listStyleImage - DONE
console.log(camelize("-webkit-transition"));//WebkitTransition - DONE

/*15.Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.Функция должна возвращать новый массив и не изменять исходный.*/
function filterRange(arr, a, b){
    let newArr = arr.filter(function (num){
        if(num >= a && num <= b){
            return num;
        }
    }
    )
    return newArr
}

let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 4))//[3, 1] - DONE
console.log(arr)//[5, 3, 8, 1] - DONE

/*16.Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна изменять принимаемый массив и ничего не возвращать.*/
function filterRangeInPlace(arr, a, b){
    for(let i=0; i < arr.length; i++){
        // текущий элемент массив
        let del = arr[i]
        //проверяем находится ли в диапазоне от a до b
        if(a < del || del > b){
            //удфляем элементы из диапазона
        arr.splice( i, 1)
        }
    }  
}   

let arr111 = [5, 3, 8, 1];
console.log(filterRangeInPlace(arr111, 1, 4))
console.log(arr111)//[3, 1] - DONE

/*17.Напишите функцию filterEvenNumbersInPlace(arr), которая принимает массив целых чисел и удаляет из него все нечетные числа, оставляя только четные. Функция должна изменять переданный массив напрямую.*/
function filterEvenNumbersInPlace(arr){
    for(let i=0; i < arr.length; i++){
        if(arr[i] %2 !== 0){
            arr.splice(i,1)
        }
    } 
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
filterEvenNumbersInPlace(numbers);
console.log(numbers);//[2, 4, 6, 8] - DONE

//18.Сортировать в порядке по убыванию:
let arr3 = [5, 2, 1, -10, 8];
arr3.sort().reverse()
console.log(arr3)//[8, 5, 2, 1, -10] - DONE

/*19.У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.Создайте функцию copySorted(arr), которая будет возвращать такую копию. */
function copySorted(arr){
   let newArr =  arr.slice().sort();
    return newArr;
}
let arr4 = ["HTML", "JavaScript", "CSS"];
console.log(copySorted(arr4));// ['CSS', 'HTML', 'JavaScript'] - DONE
console.log(arr4)//['HTML', 'JavaScript', 'CSS'] - DONE



/*20.У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.*/
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

// let names = [vasya.name, petya.name, masha.name]
let names = users.map(name=>name.name)
console.log( names );//['Вася', 'Петя', 'Маша'] - DONE

/*21.Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.*/
function sortByAge(users){
    //1 и -1 это порядок, если "a" больше "b" то 1-значит "a" идет после b
   return users.sort((a,b)=> a.age>b.age ? 1 : -1)

}
let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };

let arr5 = [ vasya1, petya1, masha1 ];

console.log(sortByAge(arr5))// - DONE

/*22.Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст. Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N. */
function getAverageAge(users){
    const ages = users.map(age =>age.age);
    const middleAge = ages.reduce((sum,cur)=>sum+cur,0) / users.length
    return Math.ceil(middleAge)
}

console.log(getAverageAge(arr5));//28 - DONE

/*23.Пусть arr – массив строк.Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr. */
function unique(arr) {
    const unigeItem =[]
   for(let i =0; i<arr.length; i++){
    if (!unigeItem.includes(arr[i])){
       unigeItem.push(arr[i])
    }
   }
   return unigeItem
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log(unique(strings))//['кришна', 'харе', ':-O'] - DONE

/*24.У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.*/
function getNewObj(arr){
    let newArr = arr.map(user=> ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }))
    return newArr
}

let vasya11 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya11 = { name: "Петя", surname: "Иванов", id: 2 };
let masha11 = { name: "Маша", surname: "Петрова", id: 3 };

let users11 = [ vasya11, petya11, masha11 ];

let usersMapped = getNewObj(users11)
console.log(usersMapped)// -DONE

/*25.Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений. Используйте метод .reduce в решении.*/
function groupById(arr){
    //value -эл-т массива
    let newObj = arr.reduce((obj,value)=>{
        obj[value.id]= value
        return obj
    },{})
    return newObj
 
}
let users1 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users1);
  console.log(usersById)
/*26.Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.Многократные прогоны через shuffle могут привести к разным последовательностям элементов.*/
// function shuffle(array){
    
// }
// let arr2 = [1, 2, 3];

// console.log(shuffle(arr2));
// // arr = [3, 2, 1]

// console.log(shuffle(arr2));
// // arr = [2, 1, 3]

// console.log(shuffle(arr2));
/*.Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.Задание состоит из двух частей.
1.Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
2.Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.*/
// function Calculator(){

// }
// let calc = new Calculator;
// console.log( calc.calculate("3 + 7"));

// let powerCalc = new Calculator();
// console.log(powerCalc.addMethod("*", (a, b) => a * b));
// console.log(powerCalc.addMethod("/", (a, b) => a / b));
// console.log(powerCalc.addMethod("**", (a, b) => a ** b));


