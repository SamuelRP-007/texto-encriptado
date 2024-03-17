const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");

const matriz_code = [
    ["e" , "enter"],
    ["i" , "imes"],
    ["a" , "ai"],
    ["o" , "ober"],
    ["u" , "ufat"],
];
//Aqui esta la funcion para el boton que encriptara el mensaje
function btnEncriptar() {
 const texto = encriptar(campo_texto.value);
 campo_mensaje.value= texto;
}
//Proceso de encriptamiento
function encriptar(fraseEncriptada){
    for(let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
return fraseEncriptada;
}
//funcion del boton de desencriptar
function desencriptarMensaje() {
    const texto = desenencriptar(campo_texto.value);
    campo_mensaje.value= texto;
   }
   //funcion para mostrar el texto original sin encriptacion
   function desencriptarMensaje() {
    const textoOriginal = document.getElementById('texto-encriptado').value;
    document.getElementById('campo-mensaje').value = textoOriginal;
}
//funcion de boton de copy
function copiarTexto() {
    const mensajeResultado = document.getElementById('campo-mensaje');
    mensajeResultado.select();
    document.execCommand("copy");
}