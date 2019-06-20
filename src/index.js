const secreto_cifrado = () =>{

const cifrar = document.getElementById("buttonCifrado");
const descifrar = document.getElementById("buttonDescifrado");

buttonCifrado.addEventListener('click', () => {
    let numeroOff = document.getElementById("offset");
    let secreto = document.getElementById("secretocompartido");

    document.getElementById("text-descifrado").value = window.cipher.encode(numeroOff.value, secreto.value);

});
