function saludarPorConsola(){
    document.write("Bienveni@");
}
saludarPorConsola();
function sumarDosNumero (num1, num2){
    console.log(num1 + num2);
    return num1 + num2;
}
let rdo1 = sumarDosNumero(1,2);
let rdo2 = sumarDosNumero(5,3);
console.log(rdo1, rdo2);

function tablaDel5(){
console.log("Tabla del 5: ");
for (let i = 0; i <= 10; i++) {
    console.log("5 x " + i  + " da como rdo" + i *5);
}
}
function tablaDeMultiplicar(num, veces){
    console.log("Tabla del " + num + ":");
    for (let i = 0; i <= veces; i++) {
        console.log( num "5 x " + i  + " da como rdo" + i *5);
    }
    }
    let multiplicar = (num1, num2) =>{num1 * num2};
    console.log(multiplicar(3,4));
    let esmayor = flase;
        if(num1> num2){
esmayor= 
        }
        
    
    let primeroMayorAlSegundo = (num1, num2) => {
        let esMayor = false;
    
        if(num1 > num2){
            esMayor = true;
        }
    
        return esMayor;
    }
    
    console.log(primeroMayorAlSegundo(5,3));
    console.log(primeroMayorAlSegundo(3,5));

// Scope (vida de una variable) - let vs var

let a = 5;  // variables locales
var b = 10; // variables globales


if (b === 10) {
  let a = 4; 
  var b = 15;
 console.log("Dentro del if")
 console.log("-----------------")
 console.log(a);
 console.log(b);    
}

console.log();
console.log();

console.log("Fuera del if")
console.log("-----------------")
console.log(a);
console.log(b);