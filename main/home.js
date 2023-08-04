document.addEventListener("DOMContentLoaded", function () {

    const screenElement = document.querySelector(".screen");
    const entradaValue = document.querySelector(".entrada");

    entradaValue.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let entradaElement = entradaValue.value;

            if (entradaElement.toLowerCase() === "help") {
                screenElement.textContent = ">Para anotar digite: NotePad.\n\n>Para calcular digite: Calculator.\n\n>Para jogar digite: Play.\n\n>Para escutar musica digite: music.\n\n>Para acessar a biblioteca digite: library.\n\nPara acessar o chatbot digite: chatbot.\n\n"
            } 
            else {
                // Se a entrada não for "help"
                screenElement.textContent = "Digite 'Help' para ver os comandos validos.";
            }

            // Limpar o campo de entrada após pressionar Enter
            entradaValue.value = "";
        }
    });

});
