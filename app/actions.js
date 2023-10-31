import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'




export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countDown()
}


export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')


   timer.updateDisplay(0, 0)
   state.minutes = 0
   state.seconds = 0
}



export function increaseTime() {
   
    if(state.minutes < 60) {

        state.minutes += 5

        el.minutes.addEventListener('blur', (event) => {
            let time = event.currentTarget.textContent

            time = time > 60 ? 60 : time
            console.log(event.currentTarget.textContent)
        } )
    }

    timer.updateDisplay()
}


export function decreaseTime() {
    state.minutes -= 5
    
    if(state.minutes < 0) {
        reset()
        return
    }

    timer.updateDisplay()
}
