//1
function mandi(){
    console.log("Mandi");
}
function sarapan(callback){
    setTimeout(() => {
        console.log("Sarapan tertunda 3 detik");
        callback();
    },3000);
    }
function berangkatSekolah(){
    console.log("Berangkat sekolah");
}
mandi();
sarapan(berangkatSekolah);
function helloWorld() {
    return helloWorld = new Promise((resolve) => {
            resolve("Hello World");
    })
};
//2
let messsages = async () => {
    try{
        const msg = await helloWorld();
        setTimeout(() => {
            console.log(msg);
        },2000);
    }
    catch(error)
    {
        console.log(error);
    }
    };
messsages()
//3
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        return response.json();
        })
        .then(function (user) {
            console.log(user);
        });

    function ambilDataUser() {
    }
    ambilDataUser()