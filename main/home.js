document.addEventListener("DOMContentLoaded", function () {

    const screenElement = document.querySelector(".screen");
    const entradaValue = document.querySelector(".entrada");

    entradaValue.addEventListener("keydown", function (event) {
        // após entrada de valor verifica qual acao fazer
        if (event.key === "Enter") {
            let entradaElement = entradaValue.value.toLowerCase();

            switch (entradaElement) {
                case "help":
                    screenElement.textContent = ">Para anotar digite: NotePad.\n\n>Para calcular digite: Calculator.\n\n>Para jogar digite: Play.\n\n>Para escutar musica digite: music.\n\n>Para acessar a biblioteca digite: library.\n\n>Para ver a previsão do tempo digite: weather.\n\n>Para acessar o chatbot digite: chatbot.\n\n";
                    break;
                case "notepad":
                    window.location.href = "NotePad/notePad.html";
                    break;
                case "music":
                    window.location.href = "music player/music.html";
                    break;
                case "weather":
                    
                    break;
                case "chatbot":
                    break;
                default:
                    screenElement.textContent = "Digite 'Help' para ver os comandos válidos.";
                    break;
            }

            entradaValue.value = "";
        }
    });

});
