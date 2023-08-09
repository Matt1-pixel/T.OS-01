
        function saveFile() {
            const editorContent = document.querySelector(".screenPad").value;
            const blob = new Blob([editorContent], { type: "text/plain" });
            const url = URL.createObjectURL(blob);

            const downloadLink = document.createElement("a");
            downloadLink.download = "myfile.txt";
            downloadLink.href = url;
            downloadLink.click();
        }