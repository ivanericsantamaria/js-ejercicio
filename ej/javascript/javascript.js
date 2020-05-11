
function funcion1 () {
    
    var x = document.getElementById("valor1").value.trim();
    var y = document.getElementById("valor2").value.trim();
    var suma = parseFloat (x)+ parseFloat (y);
    
    if (x==""){ 
        x=0;
    }
    
    if (y == "") {
        y = 0;
    }

    if (y==""){
        y=0;
    }
    
    document.getElementById("resultado1").textContent=suma;
    
    
    if (suma<1000) { 
        document.getElementById("resultado1").classList.add("text-danger");
        document.getElementById("resultado1").classList.remove("text-success");
        document.getElementById("resultado1").classList.remove("text-warning");
    }else if (suma<3000){ 
        document.getElementById("resultado1").classList.add("text-success");
        document.getElementById("resultado1").classList.remove("text-danger");
        document.getElementById("resultado1").classList.remove("text-warning");
    }else {
        document.getElementById("resultado1").classList.add("text-warning");
        document.getElementById("resultado1").classList.remove("text-success");
        document.getElementById("resultado1").classList.remove("text-danger"); 
    }

}
    
function funcion2 () {
    
    var x = document.getElementById("valor1").value.trim();
    var y = document.getElementById("valor2").value.trim();
    var suma = parseFloat (x)+ parseFloat (y);
    
    if (x==""){
        x=0;
    }
    
    if (y==""){
        y=0;
    }
    
    var porcentaje = funcionPorcentaje(suma,50); 
    
    
    document.getElementById("resultado2").textContent=porcentaje;
    
    
    if (porcentaje<1000) { 
        document.getElementById("resultado2").classList.add("text-danger");
        document.getElementById("resultado2").classList.remove("text-success");
        document.getElementById("resultado2").classList.remove("text-warning");
    }else if (porcentaje<3000){ 
        document.getElementById("resultado2").classList.add("text-success");
        document.getElementById("resultado2").classList.remove("text-danger");
        document.getElementById("resultado2").classList.remove("text-warning");
    }else {
        document.getElementById("resultado2").classList.add("text-warning");
        document.getElementById("resultado2").classList.remove("text-success");
        document.getElementById("resultado2").classList.remove("text-danger"); 
    }

}
function funcionPorcentaje (valor,porcentaje) {
    var resultado = valor * porcentaje / 100;
    return resultado;
}

function porcentajeCombo () {
    var numero = parseInt(document.getElementById("valor3").value.trim())
    var porcentajeElegido = parseInt(document.getElementById("combo").value)
    var porc = funcionPorcentaje (numero,porcentajeElegido);
    document.getElementById("resultado3").textContent=porc;
}



function funcionNumero1 () {
    var n1= parseFloat(document.getElementById("numero1").value.trim())
    
    document.getElementById("numero1span").textContent=n1;
    
    if (n1<0) {
        alert("x");
    }
}

function funcionNumero2 () {
    var n2= parseFloat(document.getElementById("numero2").value.trim())
    
    document.getElementById("numero2span").textContent=n2;
    
    if (n2<=10 && n2 >=0) {
        alert("x");
    }
}

function funcionNumero3 () {
    var n3= parseFloat(document.getElementById("numero3").value.trim())
    
    document.getElementById("numero3span").textContent=n3;
    
    if (n3!=10 && n3!=20 && n3!=45) {
        alert("x");
    }
}

function funcionNumero4 () {
    var n4= parseFloat(document.getElementById("numero4").value.trim())
    
    document.getElementById("numero4span").textContent=n4;
    
    if (n4<10 || n4>20) {
        alert("x");
    }
}

function funcionNumero5 () {
    var n5= parseFloat(document.getElementById("numero5").value.trim())
    
    document.getElementById("numero5span").textContent=n5;
    
    if (n5>0 && n5<10 || n5>30 && n5<95 || n5>95 && n5<100) {
        alert("x");
    }
}

function funcionNumero6 () {
    var n6= parseFloat(document.getElementById("numero6").value.trim())
    
    document.getElementById("numero6span").textContent=n6;
    
    if (n6 % 2 == "0"){
        alert("x");
    }
   
}

function funcionPalabra () {
    var palabra= document.getElementById("palabra").value;
    
   
    for(palabra=0; palabra<20; palabra++){
        document.getElementById("spanPalabra").textContent=palabra;
    }

}







/*

for (#) {

}
en el (#) debe indicarse en que punto debe empezar, en que punto tiene que terminar, que pasos debe dar

var x

for(x=0 ; x<10; x++)  va a comenzar en 0 y terminar en el ultimo numero en el que x sea menor a 10 y x se va a aumentar en 1 

for(x=0 ; x<10; x+=4)  
cada vez que se reporduzaca el bucle x se va a aumentar en 4
en el primero x 


*/
