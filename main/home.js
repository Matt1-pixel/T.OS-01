document.addEventListener("DOMContentLoaded", function () {

    const screenElement = document.querySelector(".screen");
    const entradaValue = document.querySelector(".entrada");

    entradaValue.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let entradaElement = entradaValue.value;

            if (entradaElement.toLowerCase() === "help") {
                screenElement.textContent = "Para anotar digite: NotePad \nPara calcular digite: Calculator \n"
            } 
            else {
                // Se a entrada não for "help", limpar a tela
                screenElement.textContent = "Digite 'Help' para ver os comandos necessarios.";
            }

            // Limpar o campo de entrada após pressionar Enter
            //entradaValue.value = "";
        }
    });

});
