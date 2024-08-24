const textArea = document.querySelector(".text-area"); //captura el texto del text area
const mensaje = document.querySelector(".mensajeEncrip");
const p = document.getElementById('texto-copiado');



function encriptar(stringEncriptada){
    let matrizCod = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i = 0; i < matrizCod.length;i++){
        if(stringEncriptada.includes(matrizCod[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCod[i][0], matrizCod[i][1])
        }
    }
    return stringEncriptada
}


function desencriptar(stringDesencriptada){
    let matrizCod = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for(let i = 0; i < matrizCod.length;i++){
        if(stringDesencriptada.includes(matrizCod[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCod[i][1], matrizCod[i][0])
        }
    }
    return stringDesencriptada
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    p.innerText = "...";
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    p.innerText = "...";
}

function btnCopiar(){
    const textoCopiado = mensaje.value;
    navigator.clipboard.writeText(textoCopiado)
    mensaje.value = "";
    p.innerText = "Texto copiado";
}