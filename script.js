//console.log("hola");

const varTitulo = document.getElementById("titulo");
const varTexto = document.getElementById("texto");

const listaTextos = ["Berto estaba triste", "Creìa que tenía la sonrisa muy grande", "Se dio cuenta que tu lo puedes ayudar", "Acomoda tu cursor sobre la sonrisa de Berto", "Ahora su sonrisa es mas pequeña, ¡lo ayudaste!"];

let estadoInicial = true;
let indice = 0;


varTitulo.addEventListener("click", () => {
    if(estadoInicial === true) {
        varTitulo.innerText = "¡Buenos días!" ; 
        varTitulo.style.color = "#32a" ;
    
    } else {
        varTitulo.innerText = "Algo mejor";
        varTitulo.style.color = "rgb(255, 0, 136)" ;
        varTitulo.style.backgroundColor = "transparent"; 
    }
    estadoInicial = !estadoInicial; 

})

varTexto.addEventListener("click", () => {
    if(indice < listaTextos.length){
        varTexto.innerText = listaTextos[indice];
        indice = indice + 1;
    } else {
        indice = 0;
        // indice = 0; // Si quiero que vuelva a empezar
        
        varTexto.innerText = "FIN";
    }
})

