//salva arquivo de texto a partir do textarea
function saveFile() {
    const editorContent = document.querySelector(".screenPad").value;
    const blob = new Blob([editorContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement("a");
    downloadLink.download = "myfile-TOS.txt";
    downloadLink.href = url;
    downloadLink.click();
}
function backHome() {
    window.location.href = "../main/home.html";
}

//le e carrega arquivo .txt no textarea
const arquivoInput = document.querySelector("#upload");
const screenTxt = document.querySelector(".screenPad");

arquivoInput.addEventListener("change", function () {
    const arquivoTxt = this.files[0];
    const leitor = new FileReader();

    leitor.addEventListener("load", function () {
    screenTxt.value = leitor.result;
    });

    if (arquivoTxt) {
    leitor.readAsText(arquivoTxt);
    }
});
