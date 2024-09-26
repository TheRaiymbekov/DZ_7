class Cars{
    constructor(options){
        this.car_make = options.car_make;
        this.model = options.model;
        this.color = options.color;
        this.wheels = options.wheels;
    }
    start() {
        console.log(this.car_make + ' заведена');
    }
    parking() {
        console.log(this.car_make + ' припаркована');
    }
    race(){
        console.log(this.car_make + ' учавствует в гонке')
    }
}

class Car1 extends Cars{
    constructor(options) {
        super(options);
        this.bumper = options.bumper;
    }
}
class Car2 extends Cars{
    constructor(options) {
        super(options);
        this.tinting = options.tinting;
    }
}
class Car3 extends Cars{
    constructor(options) {
        super(options);
        this.nitro = options.nitro;
    }
}

const car1 = new Car1({
    car_make: 'BMW',
    model: 'E34',
    color: 'wet asphalt',
    wheels: 4,
    bumper: false,
})
console.log(car1);
car1.start();

const car2 = new Car2({
    car_make: 'Mercedes-Benz',
    model: 'W140',
    color: 'white pearl',
    wheels: 4,
    tinting: true,
})
console.log(car2);
car2.parking();

const car3 = new Car3({
    car_make: 'Toyota',
    model: 'Supra',
    color: 'orange',
    wheels: 4,
    nitro: true,
})
console.log(car3);
car3.race();

///
function lights() {
    const lights = document.createElement('div');
    lights.style.display = 'flex';
    lights.style.flexDirection = 'column';
    lights.style.justifyContent = 'center';
    lights.style.alignItems = 'center';
    lights.style.gap = '5px'
    lights.style.width = '100px';
    lights.style.height = '200px';
    lights.style.backgroundColor = 'black';
    lights.style.borderRadius = '10px';

    const red = document.createElement('div');
    red.style.width = '60px';
    red.style.height = '60px';
    red.style.backgroundColor = 'white';
    red.style.borderRadius = '50%';

    const yellow = document.createElement('div');
    yellow.style.width = '60px';
    yellow.style.height = '60px';
    yellow.style.backgroundColor = 'white';
    yellow.style.borderRadius = '50%';

    const green = document.createElement('div');
    green.style.width = '60px';
    green.style.height = '60px';
    green.style.backgroundColor = 'white';
    green.style.borderRadius = '50%';

    lights.append(red);
    lights.append(yellow);
    lights.append(green);

    document.body.append(lights);
    const userInput = prompt('Введите цвет светофора (Красный, Желтый, Зеленый):').toLowerCase();

    switch (userInput) {
        case 'красный':
            red.style.backgroundColor = 'red';
            alert('STOP!');
            break;
        case 'желтый':
            yellow.style.backgroundColor = 'yellow';
            alert('WAIT');
            break;
        case 'зеленый':
            green.style.backgroundColor = 'green';
            alert('GOO!');
            break;
        default:
            alert('Неверный ввод.');
            break;
    }
}

lights();