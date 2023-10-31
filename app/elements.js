
/* Pegando e exportando os controles da aplicação */
const controls = document.getElementById('controls')

const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const forest = document.querySelector('.forest')
const rain = document.querySelector('.rain')
const coffee = document.querySelector('.coffee')
const fire = document.querySelector('.fire')


export {
    controls,

    minutes,
    seconds,


    forest,
    rain,
    coffee,
    fire
}



/* Pegando e exportando os Sons */
const alertSound = new Audio('./assets/sounds/kichen-timer')
const forestSound = new Audio('assets/sounds/Floresta.wav')
const rainSound = new Audio('assets/sounds/Chuva.wav')
const coffeeSound = new Audio('assets/sounds/Cafeteria.wav')
const fireSound = new Audio('assets/sounds/Lareira.wav')


export {
    alertSound,

    forestSound,
    rainSound,
    coffeeSound,
    fireSound
}


/* Volume control */
const ForestVolumeControl = document.getElementById('ForestVolumeControl')
const RainVolumeControl = document.getElementById('RainVolumeControl')
const CoffeeVolumeControl = document.getElementById('CoffeeVolumeControl')
const FireVolumeControl = document.getElementById('FireVolumeControl')


export {
    ForestVolumeControl,
    RainVolumeControl,
    CoffeeVolumeControl,
    FireVolumeControl
}