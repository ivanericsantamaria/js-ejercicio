
function funcion () {
    
    var input1= document.getElementById("valor").value;
    // (javascript) var input1= document.getElementById("input1").value;
    document.getElementById("resultado1").textContent=input1; 
    // (javascript) document.getElementById("resultado1").textContent=input1;
    
    if (input1>1000) { //javascript
        document.getElementById("resultado1").classList.add("text-success");
        document.getElementById("resultado1").classList.remove("text-danger");
    }else { //jquery
        document.getElementById("resultado1").classList.add("text-danger");
        document.getElementById("resultado1").classList.remove("text-success");
        
    }

}
    

