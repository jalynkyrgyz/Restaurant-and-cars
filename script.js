// 1-ое задание 
document.write("<strong> 1 - oе задание  </strong> <br> <br>");

class Restaurant { 
    name;
    cuisineType;
    served = 0;
    constructor (name, cuisineType) {
        this.name = name;
        this.cuisineType = cuisineType;             
    }

    showInfo() {
        return `Welcome to restaurant <strong> ${this.name}, </strong> we have <strong> ${this.cuisineType}. </strong> <br>`;
    };

    openTime() {
        let currentHour = new Date().getHours();
        let currentDay = new Date().getDay();

        if (currentDay === 6 || currentDay === 0) {
            return `The restaurant <strong> ${this.name} </strong> is <strong> closed.</strong> <br> Please come back at opened time.`;
        } else {
            if (currentHour > 9 && currentHour < 22){
                return `The restaurant <strong> ${this.name} </strong> is <strong> open. </strong> Welcome to our restaurant. <br>`;
            } else {
                return `The restaurant <strong> ${this.name} </strong> is <strong> closed.</strong> <br> Please come back at opened time.`;
            }
        }     
    }

    serve () {        
        return `${this.served++ } <br>`;
    }

    setServed(numberServed) {
        return `${this.served += numberServed} <br>`;
    }

    showTotalServed () {
        return `Total served: ${this.served} <br>`;
    }
}

const navat = new Restaurant("Navat", "Oriental foods");
document.write(navat.showInfo()); 
document.write(navat.openTime());
document.write('Вначале в ресторане клиентов  <br>');
document.write(navat.serve());
document.write('Пришли одиночные  клиенты ')
document.write(navat.serve());
document.write(navat.serve());
document.write(navat.serve());
document.write('Всего пришли  4 <br> ')
document.write(navat.showTotalServed());
document.write('Пришла группа из 25 человек, что общее количество составляет: ')
document.write(navat.setServed(25));
document.write(navat.showTotalServed());
document.write(navat.serve());
document.write('Пришли одиночные  клиенты ')
document.write(navat.serve());
document.write('Пришли одиночные  клиенты, всего составило: <br> ')

document.write(navat.showTotalServed());

document.write("<br> <br>")


// 1-ое задание 
document.write("<strong> 2 - е задание  </strong> <br> <br>");

class Cars {
    constructor(model, year, power, color) {
      this.model = model;
      this.year = year;
      this.power = power + " лошадиных сил";
      this.color = color;
    }

  
    showInfo() {
        return `Марка машины: <strong> ${this.model} </strong><br>
            Год выпуска: <strong> ${this.year} </strong><br>
            Объем двигателя: <strong> ${this.power} </strong><br>
            Цвет машины: <strong> ${this.color} </strong><br>`
    }
}

class ElectroCars extends Cars {
    constructor(model, year, power, color, battery) {
      super(model, year, power, color);
      this.battery = battery + "kW" ;
    }

    showInfo() {
        
         return ` ${super.showInfo()} Аккумулятор: <strong> ${this.battery}</strong> <br>`;
    }

    promote() {
        return ` <strong> <em> Покупая ${this.model} ты делаешь атмосферу чище! </em></strong>`
    }

  }
  document.write(" <i> <strong> Для обычной машины: </strong> </i> <br>")
const jiguli = new Cars('Жигули', 1990, 75, 'Черная');
document.write(jiguli.showInfo());
document.write("<br>")

document.write(" <i> <strong> Для электромобили: </strong> </i> <br>")
const modelX = new ElectroCars("Tesla X", 2020, 150, 'Красная', 2000);
document.write(modelX.showInfo());
document.write(modelX.promote());