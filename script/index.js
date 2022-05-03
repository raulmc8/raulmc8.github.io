
    var buttone = document.getElementById('buttone');
    var buttonu = document.getElementById('buttonu');
    var valor = document.getElementById('text_input').textContent;


    

function encript(){

  
    var valor = document.getElementById('text_input').value;
    
    var nuevo = ""; 
    if (valor == "" ){
        
    }
    else{
    var nuevo = valor.replace(/e/gi,'enter').replace(/i/gi,'imes').replace(/o/gi,'ober').replace(/a/gi,'ai').replace(/u/gi,'ufat');
    }

    // for(let i = 0; i<valor.length; i++) {

    //     if (valor.charAt(i) =="a"){
    //         valor = valor.replace("a", "ai");
    //     }
    //     if (valor.charAt(i) =="e"){
    //         valor = valor.replace("e", "enter");
    //     }
    //     if (valor.charAt(i) =="i"){
    //         valor = valor.replace("i", "imes");
        
    //     }
    //     if (valor.charAt(i) =="o"){
    //        valor = valor.replace("o", "ober");
    //     }
    //     if (valor.charAt(i) =="u"){
    //        valor.replace("u", "ufat");
    //     }
        
    
    // }
    document.getElementById('results').value = nuevo;
}

function unencript(){
    var valor = document.getElementById('results').value;
    var nuevo = "";
    var nuevo = valor.replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ober/gi,'o').replace(/ai/gi,'a').replace(/ufat/gi,'u');
    document.getElementById('text_input').value = nuevo;
}

function copyToClipBoard1() {

  
    var valor = document.getElementById('results')
    
    valor.select();
    document.execCommand('copy');
    alert("Copiado");
   
    
  

}

function copyToClipBoard2() {

    var valor = document.getElementById('text_input')
    
    valor.select();
    document.execCommand('copy');

    alert("Copiado");
}





buttonu.onclick = unencript;
buttone.onclick = encript;
buttonc1.onclick = copyToClipBoard1;
buttonc2.onclick = copyToClipBoard2;
