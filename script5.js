//КЛАССЫ
/*1.Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.P.S. Часики тикают в консоли. Откройте её, чтобы посмотреть.*/
// class Clock {
//     constructor({ template}){
//         this.template =  template;
//     }

//     render(){
//         let date = new Date();
  
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
    
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
    
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
    
//         let output = this.template
//           .replace('h', hours)
//           .replace('m', mins)
//           .replace('s', secs);

//         console.log(output);
//     }

//     stop(){
//         clearInterval(this.timer);
//     }

//     start(){
//         this.render()
//         this.timer = setInterval(this.render(), 1000);
//     }
// }

// let clock = new Clock({template: 'h:m:s'});
// clock.start()//-DONE

/*2.В коде ниже класс Rabbit наследует Animal.К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.*/
class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
class Rabbit extends Animal {
    constructor(name) {
    // this.name = name;// ошибка
        super(name);//
      this.created = Date.now();
    }
}
  
  let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
  console.log(rabbit.name);//Белый кролик - DONE

/*3.У нас есть класс Clock. Сейчас он выводит время каждую секунду.Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.
Сохраните ваш код в файл extended-clock.js
Не изменяйте класс clock.js. Расширьте его.*/
class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs; 
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock{
  constructor({ template },precision =1000){
    super(template);
    this.precision = precision
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}// ??