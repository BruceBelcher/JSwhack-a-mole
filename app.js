const holes = document.querySelectorAll('.holes');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mrbump');
let molePeepInterval = 2000; //ms interval between peeping moles
let peepIntervalTimer

//bounce a random mole
let bounceMole = () => {
    console.log('bounceMole')
    let mole = ((Math.floor(Math.random() * 6 )))
    //clear Mole classlist as if it fills up it stops - needs a delay
    setTimeout( () => {moles[mole].classList.remove('bounce')}, 6000) //longer than animation duration?
    moles[mole].classList.add('bounce')   
    moles[mole].addEventListener("click", moleWhacked)
}

// detect a mole is whacked and add to score
let moleWhacked = () => {
    console.log(`mole whacked`)
    let score = Number(scoreBoard.innerHTML)
    score += 1
    scoreBoard.innerHTML = score
    console.log(`score = ${score}`)
}

let speedUpMoles = () => {
    if(score = Number(scoreBoard.innerHTML) >5) {
        clearInterval(peepIntervalTimer)
        bounce.animationDuration = "0.1s" //double speed of Moles peeping
        peepIntervalTimer = setInterval(bounceMole, molePeepInterval)
    } else { 
        if(score = Number(scoreBoard.innerHTML) >10) { 
            clearInterval(peepIntervalTimer)
            bounce.animationDuration = "0.5s" //double speed of Moles peeping
            peepIntervalTimer = setInterval(bounceMole, molePeepInterval)
        } else {
            if(score = Number(scoreBoard.innerHTML) >15) { 
                clearInterval(peepIntervalTimer)
                bounce.animationDuration = "0.1s" //double speed of Moles peeping
                peepIntervalTimer = setInterval(bounceMole, molePeepInterval)
            }
        }
    }
}

//MAIN - start/stop game by clicking on Start Game button defined in HTML
let startGame = () => {
    if (document.getElementById("startButton").innerHTML == "START GAME") {
        console.log ('game started')
        //bounce a mole with an interval
        peepIntervalTimer = setInterval(bounceMole, molePeepInterval)
        speedUpMoles()
        document.getElementById("startButton").innerHTML = "STOP GAME"
    } else {
        console.log ('game stopped')
        //stop bouncing the moles
        clearInterval(peepIntervalTimer)
        document.getElementById("startButton").innerHTML = "START GAME"
    }   
}
