//CREAMOS NUESTRO MAPA DE LETRAS QUE CONTENDRA EL VALOR A COLOCAR DE CADA LETRA
let matriz_letras = new Map();
matriz_letras.set("A","90");
matriz_letras.set("B","91");
matriz_letras.set("C","92");
matriz_letras.set("D","93");
matriz_letras.set("E","94");
matriz_letras.set("F","80");
matriz_letras.set("G","81");
matriz_letras.set("H","82");
matriz_letras.set("IJ","83");
matriz_letras.set("K","84");
matriz_letras.set("L","70");
matriz_letras.set("M","71");
matriz_letras.set("N","72");
matriz_letras.set("O","73");
matriz_letras.set("P","74");
matriz_letras.set("Q","60");
matriz_letras.set("R","61");
matriz_letras.set("S","62");
matriz_letras.set("T","63");
matriz_letras.set("U","64");
matriz_letras.set("V","50");
matriz_letras.set("W","51");
matriz_letras.set("X","52");
matriz_letras.set("Y","53");
matriz_letras.set("Z","54");

/*FUNCION PARA QUITAR ESPACIOS*/
function quitaEspacios(mensaje){
    mensaje = mensaje.toUpperCase();//hacemos que nuestra frase solo este en mayusculas
    let mensajeSinESpacio = "";
    for (letra of mensaje){//recorremos todo nuestro string
        if (letra !== " ") {//si el caracter en esa iteracion no es un espacio en blanco 
            mensajeSinESpacio = mensajeSinESpacio + letra;//se agrega a nuestra variable mensajeSinEspacio
        }
    }

    return mensajeSinESpacio;//REGRESA LA ORACION SIN ESPACIOS
}

/*FUNCION PARA ENCRIPTAR LA LETRA*/
function encriptaLetra(letra,mensajeEncriptado){
    let valorLetra = matriz_letras.get(letra);//obtenemos el valor de nuestra letra
    mensajeEncriptado = mensajeEncriptado + valorLetra;//lo agregamosa nuestra variable de mensaje encriptado
    return mensajeEncriptado;
} 

/*FUNCION PARA ENCRIPTAR EL MENSAJE QUE LE MANDEMOS */
function encriptaMensaje(mensajeSE){
    mensajeEncriptado = "";
    for (let letra of mensajeSE) {//recorremos nuestro mensaje sin espacios
        mensajeEncriptado = encriptaLetra(letra,mensajeEncriptado);
    }

    return mensajeEncriptado;
}

function encripta(mensaje){
    let MSE = quitaEspacios(mensaje);
    let ME = encriptaMensaje(MSE);
    console.log(ME);
}