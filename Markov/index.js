let contP = document.querySelector("#cont-predicciones");//contenedor de las predicciones que se haran
let startBtn = document.querySelector("#startB");//boton para iniciar la ejecucion

//funcion para mandar a imprimir los datos a pantalla
function agregaPPAntalla(){
    contP.textContent = contP.textContent +clima;
}

startBtn.addEventListener("click",predecir);//buton que correra el programa cuando lo clicken 