
function funcion () {
    
    var x= document.getElementById("valor1").value;
    var y=document.getElementById("valor2").value;
    var suma= parseInt (x)+ parseInt (y);
    document.getElementById("resultado1").textContent=suma; 
    
    
    if (suma<1000) { 
        document.getElementById("resultado1").classList.add("text-danger");
        document.getElementById("resultado1").classList.remove("text-success");
        document.getElementById("resultado1").classList.remove("text-warning");
    }else if (suma<3000){ 
        document.getElementById("resultado1").classList.add("text-success");
        document.getElementById("resultado1").classList.remove("text-danger");
        document.getElementById("resultado1").classList.remove("text-warning");
    }else if (suma>3000){
        document.getElementById("resultado1").classList.add("text-warning");
        document.getElementById("resultado1").classList.remove("text-success");
        document.getElementById("resultado1").classList.remove("text-danger"); 
    }

}
    

