
function funcion () {
    
    var input1= $("#valor").val();
    // (javascript) var input1= document.getElementById("input1").value;
    $("#resultado1").text(input1); 
    // (javascript) document.getElementById("resultado1").textContent=input1;
    
    if (input1>1000) { //javascript
        document.getElementById("resultado1").classList.add("text-success");
        document.getElementById("resultado1").classList.remove("text-danger");
    }else { //jquery
        $("#resultado1").removeClass("text-success").addClass( "text-danger");
        
    }

}
    

