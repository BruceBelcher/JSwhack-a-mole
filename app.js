const holes = document.querySelectorAll('.holes');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mrbump');
const molePeepInterval = 1000; //ms interval between peeping moles
let peepIntervalTimer

//bounce a random mole
let bounceMole = () => {
    let mole = ((Math.floor(Math.random() * 6 )))
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

//MAIN - start game by clicking on Start Game button defined in HTML
let startGame = () => {
    if (document.getElementById("startButton").innerHTML == "START GAME") {
        console.log ('game started')
        //bounce a mole with an interval
        peepIntervalTimer = setInterval(bounceMole, molePeepInterval)
        document.getElementById("startButton").innerHTML = "STOP GAME"
    } else {
        console.log ('game stopped')
        //stop bouncing the moles
        clearInterval(peepIntervalTimer)
        document.getElementById("startButton").innerHTML = "START GAME"
    }   
}
