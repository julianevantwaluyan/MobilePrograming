// Asyncronous JavaScript

console.log ("satu");
console.log("dua");
console.log("tiga");

//callback
fungtion greetings(fullName) {
    console.log('Hi ${fullName}');

}

fungtion introduction(firstName, lastName, callback){
    const fullName = '${firstName} ${lastName}';
    callback(fullName);
}
introduction("John", "Doe",(fullName)=>{
    console.log('Hi ${fullName}');
})