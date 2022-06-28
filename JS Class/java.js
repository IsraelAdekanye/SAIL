// var greeting ="Hello, World";
// console.log (greeting);
// var sail = "Developer's Cabal";
// console.log (sail);
// var stat = "Watching Netflix";
// stat = "Relaxing at the beach";
// console.log (stat);
// var myDressing = "So Modest";
// myDressing = "High Class";
// console.log (myDressing);
// var defaultStatus = "Hi There";
// var stat_us = "Playing Football";
// stat_us=defaultStatus;
// console.log (stat_us);
// var campus = "Senate Building";
// var church = "Mission House";
// church=campus;
// console.log(church);
// var temp = "100 C";
// temp = "0 C";
// console.log(temp);
// var numberOfLikes = 12;
// numberOfLikes = 13+1;
// console.log(numberOfLikes);
// var instagramLikes = 200;
// // instagramLikes = instagramLikes+1;
// console.log(instagramLikes+1 + " Likes");
// var myCalculator = 3;
// myCalculator = 4;
// console.log(myCalculator/2)

// // DAY 2

// var adeola;
// adeola = "Beautiful";
// var upp = adeola.toUpperCase();
// var segun = adeola.length;
// console.log( "Segun " + segun);
// console.log(upp);
// const anu = 10;
// console.log(anu);
// //anu = 20;
// console.log(anu);
// var colorBlue = "Characteristics, Function, Status";
// var newColor = colorBlue.split('');
// console.log(newColor);
// var joel = adeola.split('');
// console.log(joel[0]+joel[3]+joel[6]);

// var ade0la = "Innovation";
// var ade1la = ade0la.length;
// var segnn = ade0la.split('');
// var segun = ade0la.substring(ade1la-1);
// console.log(segun);
// console.log(segnn[ade1la-1])


// // DAY 3

// var day3 = adeola+ade0la;
// console.log(adeola+ade0la);
// var a = '15';
// a=parseInt(a, 10);
// var b = 5000;
// let c = a+b;
// console.log(c)

// var text_colors =[
//     ["Tomatoes", "#f00"],
//     ["Celery", "#0f0"],
//     ["Blueberries", "#00f"],
//     ["Lemons", "#ff0"],
//     ["Grapes", "#f0f"],
//     ["Koolaide", "#0ff"],
// ]
// var a = text_colors[2][0]
// console.log(a)

// var text_colors =[
//     {sex:"Male", name:"Jeff"},
//     {sex:"Female", name:"Megan"},
//     {sex:"Male", name:"Taylor"},
//     {sex:"Female", name:"Madison"},
//     ]
//     var a = text_colors[2]['name']
//     console.log(a)

// const items = [
//     {name:"Bike", Price:100},
//     {name:"TV", Price:200},
//     {name:"Album", Price:10},
//     {name:"Book", Price:5},
//     {name:"Phone", Price:500},
//     {name:"Computer", Price:1000},
//     {name:"Keyboard", Price:25}
// ]
// var brandNew = items.filter
// (
//     (ne)=> {
//         return ne.Price<=100
//     }
// )
// console.log(brandNew)

// DAY 4

// var a = "2";
// var b = 6;
// var c = b==a
// console.log(c)

// var go = true
// var stop = false
// var slowDown = go!==stop

// var petName = 'Jessie';
// var breed = 'Labrador';
// var age = 3;
// var petDescription;
// petDescription = petName+'-'+breed+','+age;
// console.log(petDescription);
// console.log(petName+'-'+breed+','+age);

// var numberOfWaterTaken = 5;
// var timeDifference = "3 Hours";
// console.log("Water Consumption: x"+numberOfWaterTaken);
// console.log("Time Difference: "+timeDifference);

// var availableCars = 35;
// var garageSize = 20;
// var readyToPark = garageSize==availableCars
// console.log(readyToPark)

// var batteryLevel = 30;
// var low = 30;
// var batteryLow = batteryLevel<=low;
// console.log("Battery Low: "+batteryLow)

// var point = 15;
// var ys = 10;
// //var L2 = point>=ys;
// console.log("Stage 2: "+(point>=ys));

// var position = "last";
// var expected = 'first';
// var result = position!== expected;
// console.log(result)

// var highTemp = 40;
// var lowTemp = 10;
// var comp = lowTemp<highTemp;
// if (lowTemp<highTemp)
// {
//     console.log(comp);
// }


// DAY 5
// var day = true;
// if (!day){
//     console.log('Switch On')
// }
// else {
//     console.log('Switch Off')
// }

// var score = 99;
// if (score >= 70 && score < 90){
//     console.log("You Passed!")
// }
// else if (score >=90 && score < 98){
//     console.log("You got an A!")
// }
// else if (score >=98){
//     console.log("A+")
// }
// else {
//     console.log("Try Again")
// }

// var i = 3;
// while (i<7){
//     console.log(`XXXXXXXX----------  ${i}`);
//     i++;
// }

// DAY 6
// var a = window.prompt("Enter a Number");
// a = parseInt(a,10)
// if (a<100){
//     console.log("Welcome Participant, you have entered the number "+ a);
// }

// const x = 11;
// const color = x > 10 ? "red" : "blue"
// switch(color) {
//     case "red":
//         console.log("Color is Red");
//         break;
//     case "blue":
//         console.log("Color is Blue");
//         break;
//     default:
//         console.log("Nothing")
// }

// const score = window.prompt("Enter your score");
// switch(true) {
//     case score > 0 && score <= 39 :
//         console.log("You Failed");
//         break;
//     case score > 39 && score <= 44 :
//         console.log("You got an E!");
//         break;
//     case score > 44 && score <= 49 :
//         console.log("You got a D!");
//         break;
//     case score > 49 && score <= 59 :
//         console.log("You got a C!");
//         break;
//     case score > 59 && score <= 69 :
//         console.log("You got a B!");
//         break;
//     case score > 69 && score <= 100 :
//         console.log("You got an A!");
//         break;
//     default:
//         console.log("NULL");            
// }

// var score = window.prompt("Enter your score");
// // score = parseInt(score, 10);
// switch(score) {
//     case score <= 39:
//         console.log("Your Failed");
//         break;
//     case score <= 44:
//         console.log("You got an E!");
//         break;
//     case score <= 49:
//         console.log("You got a D!");
//         break;
//     case score <= 59:
//         console.log("You got a C!");
//         break;
//     case score <= 69 :
//         console.log("You got a B!");
//         break;
//     case score <= 100 :
//         console.log("You got an A!");
//         break;
//     default:
//         console.log("NULL");            
// }

// function myFunction (p1,p2){
//     console.log(p1+p2)
//     return p1*p2
// }
// myFunction (3,5);
//console.log(myFunction(3,5));

// hello = () => {
//     return "Hello";
// }
// console.log(hello());

// myfx =(a,c)=>{
//     console.log(a*c)
// }
// myfx(2,4);

// const numbers = [1,-1,2,3];
// const filtered = numbers.filter(function(filt){
//     return filt > 1;
// })
// console.log(filtered)

// const numbers = [1,-1,2,3];
// const filtered = numbers.filter(
//     // filt=
//     (e)=>{
//         return e>1;
//     }
// )
// console.log(filtered)

// DAY 7
// const country = {
//     Capital: "Abuja",
//     States: 36,
//     Tribes: 12,
//     Democracy: true,
//     Population: "200000000",
//     Export: "Crude Oil",

//     fuelScarcity : ()=>{
//         console.log("There is Fuel Scarcity");
//     }
// }

// country.fuelScarcity();
// var a = country["Capital"];
// var b = country["Democracy"];
// var c = parseInt(country["Population"], 10);
// var d = b == true ? "Democratic" : "Military";
// console.log(a +" is "+ d);
// console.log(`${a} is ${d}`)
// console.log(c);
// console.log(typeof c);

// class Student{
//     constructor(name, age, gpa){
//         this.oruko = name;
//         this.ojoOri = age;
//         this.gpa = gpa;
//     }
//     study(){
//         console.log(`${this.oruko} is Studying`);
//         //console.log(this.oruko + " is Studying");
//     }
// }
// const Israel = new Student ("Nzube", 50, 2.0)

// console.log(Israel.oruko);
// console.log(Israel.ojoOri);
// console.log(Israel.gpa)
// console.log(Student.name)

// Israel.study()

// class Player {
//    constructor (name, score) {
//         this.name = name;
//         this.score = score;
//    }
//     pause () {
//         console.log('you bloody paused the game!!')
//     }

//     exit () {
//         console.log('you don fuck up !!!')
//     }

// }

// const player1 = new Player("NZ", 50);
// const player2 = new Player();

// player1.score += 1;
// console.log(player1.name)

// // that's a good one

// console.log(`that's`)

// DAY 8
// class Car{

//     numberOfCars = 0;
//     constructor(model){
//         this.model = model;
//         this.numberOfCars += 1;
//     }
// }

// const Car1 = new Car('Mustang');
// const Car2 = new Car("Camry");
// const Car3 = new Car('BMW');

// console.log(Car1.model);
// console.log(Car1.numberOfCars);
// console.log(Car2.model);
// console.log(Car1.numberOfCars);

// STATIC IN ACTION
// class Car{

//     static numberOfCars = 0;
//     constructor(model){
//         this.model = model;
//         Car.numberOfCars += 1;
//     }
// }

// const Car1 = new Car('Mustang');
// const Car2 = new Car("Camry");
// const Car3 = new Car('BMW');
// const Car4 = new Car('Ferrari');
// const Car5 = new Car('Lamb');

// console.log(Car1.model);
// console.log(Car4.model);
// console.log(Car.numberOfCars);

// class Animal{
// constructor(alive, eat, run){
//     this.alive = alive;
//     this.eat = eat;
//     this.run = run;
// }
//     alive = true;
//     eat=()=>
//         console.log(`I, ${this.name} can eat`)

//     sleep(){
//         console.log('I can sleep')
//     }
// }
// class Fish extends Animal{
//     name = "Epiya"
//     swim(){
//         console.log('I can Swim');
//     }
// }
// class Cheetah extends Animal{
//     name = "Pet Cheetah"
//     sprint(){
//         console.log('I can Sprint');
//     }
// }
// class Snail extends Animal{
//     name = "Nzube"
//     slug(){
//         console.log("Nzube is a Slug");
//     }
// }
// const tilapia = new Fish();
// var pancho = new Cheetah();

// tilapia.eat();
// pancho.eat();
// console.log(tilapia.name)

// DAY 9
// SUPER
// class Animal{
//     alive = true;
// }
// class Rabbit /* extends Animal */ {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// var emo = new Rabbit("ehoro", 2);
// console.log(emo)

// class Animal{
//     alive = true;
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed
//     }
// }
// var emo = new Rabbit("ehoro", 2, 8);
// console.log(emo)

// class Car {
//     constructor(power){
//         this._agbara = power;
//     }
//     get hakeem(){
//         return `${this._agbara} Watts`
//     }
// }
// var ijapa = new Car(200);
// ijapa.agbara = 400
// console.log(ijapa.hakeem)

// class Car {
//     constructor(power){
//         this._agbara = power;
//     }
//     hakeem=()=>{
//         return this._agbara
//     }
// }
// var ijapa = new Car(200);
// ijapa.agbara = 400
// console.log(ijapa.hakeem())

// DAY 10