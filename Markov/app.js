//Estados de markov (siguiendo el caso de 2 estados Dia lluvioso "L" Dia soleado "S")
const SOLEADO = "S";
const LLUVISO = "L";
let clima;

//Partimos de la idea de que para 2 estados vamos a tener 4 posibles combinaciones P(A/A),P(A/B),P(B/A),P(B/A)
//Pero ademas de eso para cada estado tendriamos solo 2 posiblidades quedarse en el mismo estado o ir al siguiente
//cada una de las opciones tendra una probabilidad del 0.5%


//funcion para decidir que clima sera el siguiente
function decideClima(aleatorio){
    if (aleatorio <= 0.5) {//si es menor o igual a 0.5 el siguiente seria soleado 
        clima = SOLEADO;
    }else{//caso contrario seria lluvioso
        clima = LLUVISO;
    }
}

//funcion que nos dira cual es la siguiente prediccion de nuestro modelo
function generaSiguientePrediccion(){
    let siguienteP = Math.random();//Generamos aleatorio para saber que clima sigue 
    decideClima(siguienteP);
    agregaPPAntalla();
} 

//funcion principal
function predecir(){
    contP.textContent = "";//limpiamos el contenedor
    let tope = prompt("cuantas predicciones deseas hacer");
    for (let index = 0; index < tope; index++) {
        generaSiguientePrediccion();
    }
}

