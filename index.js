let loading = document.querySelector("#loading");
let time = 0;
let audio = document.getElementById('start')

function changeText() {
    loading.textContent = `Carregamento em ${time}%`;
}

function startSistem() {
    audio.play()

    interval = setInterval(function() {
        if (time < 100) {
            time++;
            changeText();

            if(time == 100){
                window.location = 'main/index2.html'
            }
        } else {
            clearInterval(interval); 
            time = 0; 
            startSistem()
    }
    }, 177);
}

let startSis = document.querySelector("#startSis");
let interval; 


//startSis.addEventListener("click", function () {
//  clearInterval(interval);
//startSistem();
//});
