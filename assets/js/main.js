function cronometro(){
    // Get elements
    let time = document.querySelector(".hora")
    
    // O Date() recebe somente milissegundos
    // Gerando data
    function initTimer(segundo){
        let data = new Date(segundo * 1000) // Convertendo o Date() para segundos
        let options = {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone: "GMT" // Mudando as horas para zero // Estudar sobre timezone
        }
        let format = data.toLocaleString("pt-br", options)
        return format
    }

    let cond = true
    let interval
    let sec = 0
    // Adicionando os valores ao timer
    function addTimer(){
        if(cond){
            interval = setInterval(() => {
                time.textContent = `${initTimer(++sec)}`
            }, 1000)
            time.style.color = "black"
        }
        cond = false
    }

    // Parando o timer
    function stopTimer(){
        clearInterval(interval)
        time.style.color = "red"
        cond = true
    }

    // Zerando timer
    function resetTimer(){
        stopTimer()
        time.textContent = "00:00:00"
        time.style.color = "black"
        sec = 0
        cond = true
    }

    // Adicionando addEventListener em todos os botões de uma vez
    document.addEventListener("click", function(e){
        let el = e.target;
        if(el.classList.contains("iniciar")) addTimer();
        if(el.classList.contains("pausar")) stopTimer();
        if(el.classList.contains("zerar")) resetTimer();
    })
}
cronometro()

/* 
    Observações:

    - O e.target mostra o elemento em que foi clicado
    - classList.contains verifica se o elementos possui uma certa classe 
    - O setInterval sempre será auto executável
*/

