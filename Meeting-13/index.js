// //OOP in JavaScript
// //Object Literal
// const mobil1 = {
//     merek: "Toyota",
//     warna: "Putih",
//     nyalakanMobil: function() {
//         console.log('Mobil dengan merek ${this.merek} sudah dinyalakan');
//     }
// }

// const mobil2 = {
//     merek: "Honda",
//     warna: "Merah",
//     nyalakanMobil: function() {
//         console.log('Mobil dengan merek ${this.merek} sudah dinyalakan');
//     }
// }

// mobil1.nyalakanMobil();
// mobil2.nyalakanMobil();

//Object Class

class Mobil{
    constructor(merek,warna){
        this.merek= merek;
        this.warna= warna;
    }
    nyalakanMobil(){
        console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan`);
    }
    }
// const mobil1 = new Mobil("Toyota", "Putih");
// mobil1.nyalakanMobil()

//Intheritance
class Toyota extends Mobil{
    constructor(merek, warna, mesin){
        super(merek, warna);
        this.mesin = mesin;
    }
    matikanMobil(){
        console.log(`Mobil dengan merek ${this.merek} sudah dimatikan`);
    }
}


const agya = new Toyota("Agya", "Putih", "1000cc");
const avanza = new Toyota("Avanza", "Hitan", "1300cc");

agya.nyalakanMobil();
agya.matikanMobil();
avanza.nyalakanMobil();


// class Button extends Component{
//     componentDidMount(){

//     }
//     constructor(){

//     }
// }