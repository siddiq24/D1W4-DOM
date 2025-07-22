const timer = document.querySelector('section:nth-of-type(1)')
const merah = document.querySelector('.merah')
const kuning = document.querySelector('.kuning')
const ijo = document.querySelector('.hijau')


loop(8)
function loop(t){
    setTimeout(() => {
        if (t >= 6) {
            merah.style.filter = "brightness(1)"
            kuning.style.filter = "brightness(0.1)"
            ijo.style.filter = "brightness(0.1)"
            merah.style.boxShadow = "0 0 50px red"
            kuning.style.boxShadow = "none"
            ijo.style.boxShadow = "none"
            timer.textContent = t - 5;
            t--
            loop(t)
        } else if (t > 3 && t < 6) {
            merah.style.filter = "brightness(0.1)"
            kuning.style.filter = "brightness(1)"
            ijo.style.filter = "brightness(0.1)"
            merah.style.boxShadow = "none"
            kuning.style.boxShadow = "0 0 50px yellow"
            ijo.style.boxShadow = "none"
            timer.textContent = t - 3;
            t--
            loop(t)
        }
        else {
            merah.style.filter = "brightness(0.1)"
            kuning.style.filter = "brightness(0.1)"
            ijo.style.filter = "brightness(1)"
            merah.style.boxShadow = "none"
            kuning.style.boxShadow = "none"
            ijo.style.boxShadow = "0 0 50px green"
            timer.textContent = t;
            t--
            if(t===0){loop(8)}
            else{loop(t)}
        }
    }, 1000)
}