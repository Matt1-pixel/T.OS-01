let loading = document.querySelector("#loading");

let startSis = document.querySelector("#startSis");

function startSistem() {
    function contarNumeros(numero) {
        
    if (numero > 99) {
        return numero;
    } else {
        console.log(numero);
        return contarNumeros(numero + 1);
    }
    }

    const valorX = contarNumeros(0);
    const valorFinal = parseInt(valorX);

    loading.textContent = "Este é " + valorFinal;
}
let audio = document.getElementById("start");
    audio.play();