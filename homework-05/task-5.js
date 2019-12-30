'use strict';
export function task5() {

    class Car {
        constructor({
            maxSpeed,
            speed = 0,
            isOn = false,
            distance = 0,
            price
        }) {
            this.maxSpeed = maxSpeed;
            this.speed = speed;
            this.isOn = isOn;
            this.distance = distance;
            this._price = price;
        }
        static getSpecs(car) {
            console.log(
                `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`
            );
        }
        get price() {
            return this._price;
        }
        set price(price) {
            this._price = price;
        }

        /*
         * Добавь геттер и сеттер для свойства price,
         * который будет работать с свойством цены автомобиля.
         */

        /*
         * Добавь код для того чтобы завести автомобиль
         * Записывает в свойство isOn значение true
         */
        turnOn() {
            return (this.isOn = true);
        }

        /*
         * Добавь код для того чтобы заглушить автомобиль
         * Записывает в свойство isOn значение false,
         * и сбрасывает текущую скорость в 0
         */
        turnOff() {
            this.speed = 0;
            return (this.isOn = false);
        }

        /*
         * Добавялет к свойству speed полученное значение,
         * при условии что результирующая скорость
         * не больше чем значение свойства maxSpeed
         */
        accelerate(value) {
            if (this.speed + value <= this.maxSpeed) {
                this.speed = this.speed + value;
            } else {
                this.speed = this.maxSpeed;
            }
        }
        /*
         * Отнимает от свойства speed полученное значение,
         * при условии что результирующая скорость не меньше нуля
         */
        decelerate(value) {
            const deceleratedSpeed = this.speed - value;
            if (deceleratedSpeed > 0) {
                this.speed = deceleratedSpeed;
            }
        }
        /*
         * Добавляет в поле distance киллометраж (hours * speed),
         * но только в том случае если машина заведена!ˇ
         */
        drive(hours) {
            if (this.isOn) {
                this.distance += hours * this.speed;
            }
        }
    }

    const mustang = new Car({
        maxSpeed: 200,
        price: 2000
    });

    mustang.turnOn();
    mustang.accelerate(50);
    mustang.drive(2);
    Car.getSpecs(mustang);
    // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

    mustang.decelerate(20);
    mustang.drive(1);
    mustang.turnOff();

    Car.getSpecs(mustang);
    // maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

    console.log(mustang.price); // 2000
    mustang.price = 4000;
    console.log(mustang.price); // 4000
}