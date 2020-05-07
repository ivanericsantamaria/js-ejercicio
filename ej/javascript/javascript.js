
function funcion () {
    
    var input1= document.getElementById("valor1").value;
    
    document.getElementById("resultado1").textContent=input1; 
    
    
    if (input1<1000) { 
        document.getElementById("resultado1").classList.add("text-danger");
        document.getElementById("resultado1").classList.remove("text-success");
        document.getElementById("resultado1").classList.remove("text-warning");
    }else if (input1<3000){ 
        document.getElementById("resultado1").classList.add("text-success");
        document.getElementById("resultado1").classList.remove("text-danger");
        document.getElementById("resultado1").classList.remove("text-warning");
    }else if (input1>3000){
        document.getElementById("resultado1").classList.add("text-warning");
        document.getElementById("resultado1").classList.remove("text-success");
        document.getElementById("resultado1").classList.remove("text-danger"); 
    }

}
    

