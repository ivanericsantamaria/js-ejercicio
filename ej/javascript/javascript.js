
function funcion1 () {
    
    var x = document.getElementById("valor1").value.trim();
    var y = document.getElementById("valor2").value.trim();
    var suma = parseFloat (x)+ parseFloat (y);
    
    if (x==""){
        x=0;
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
    
    var porcentaje = funcion3(suma,50); 
    
    
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
function funcion3 (valor,porcentaje) {
    var resultado = valor * porcentaje / 100;
    return resultado;
}

function funcion4 () {
    var numero = parseInt(document.getElementById("valor3").value.trim())
    var porcentajeElegido = parseInt(document.getElementById("combo").value)
    var porc = funcion3 (numero,porcentajeElegido);
    document.getElementById("resultado3").textContent=porc;
}

