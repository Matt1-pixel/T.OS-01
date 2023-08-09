
        function saveFile() {
            const editorContent = document.querySelector(".screenPad").value;
            const blob = new Blob([editorContent], { type: "text/plain" });
            const url = URL.createObjectURL(blob);

            const downloadLink = document.createElement("a");
            downloadLink.download = "myfile.txt";
            downloadLink.href = url;
            downloadLink.click();
        }

        function loadFile() {
            const fileInput = document.createElement("input");
            fileInput.type = "file";

            fileInput.addEventListener("change", function() {
                const file = fileInput.files[0];
                const reader = new FileReader();

                reader.onload = function(event) {
                    const content = event.target.result;
                    document.getElementById("editor").value = content;
                };

                reader.readAsText(file);
            });

            fileInput.click();
        }

 