import { controls } from './elements.js'
import * as actions from './actions.js'
import {
    forest,
    rain,
    coffee,
    fire
} from './elements.js'

import {
    forestSound,
    rainSound,
    coffeeSound,
    fireSound
} from './elements.js'

import {
    ForestVolumeControl,
    RainVolumeControl,
    CoffeeVolumeControl,
    FireVolumeControl
} from './elements.js'





export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()

        console.log(action)
    })
}





/* Sounds controls */

export function musicControls() {
    let isPlaying = false;

    const initialVolume = 0.5; // Pode ajustar o valor conforme necessário

    // Inicialize os sons com o volume inicial
    forestSound.volume = initialVolume;
    rainSound.volume = initialVolume;
    coffeeSound.volume = initialVolume;
    fireSound.volume = initialVolume;

    // Função para atualizar o volume
    function ForestUpdateVolume(sound) {
        //controle de volume aqui
        sound.volume = ForestVolumeControl.value;
    }

    function RainUpdateVolume(sound) {
        //controle de volume aqui
        sound.volume = RainVolumeControl.value;
    }
    
    function CoffeeUpdateVolume(sound) {
        //controle de volume aqui
        sound.volume = CoffeeVolumeControl.value;
    }

    function FireUpdateVolume(sound) {
        //controle de volume aqui
        sound.volume = FireVolumeControl.value;
    }
    




    //eventos para controlar o volume
    ForestVolumeControl.addEventListener('input', function() {
        // Atualize o volume para o som atual
        if (isPlaying) {
            ForestUpdateVolume(forestSound);
        }
    });

    RainVolumeControl.addEventListener('input', function() {
        // Atualize o volume para o som atual
        if (isPlaying) {
            RainUpdateVolume(rainSound);
        }
    });

    CoffeeVolumeControl.addEventListener('input', function() {
        // Atualize o volume para o som atual
        if (isPlaying) {
            CoffeeUpdateVolume(coffeeSound);
        }
    });

    FireVolumeControl.addEventListener('input', function() {
        // Atualize o volume para o som atual
        if (isPlaying) {
            FireUpdateVolume(fireSound);
        }
    });






    //eventos para o clique
    forest.addEventListener('click', function() {
        if (!isPlaying) {
            forest.classList.add('musicOn');
            forestSound.play();
  
            ForestUpdateVolume(forestSound);
            isPlaying = true;
        }
    });

    rain.addEventListener('click', function() {
        if (!isPlaying) {
            rain.classList.add('musicOn');
            rainSound.play();
  
            RainUpdateVolume(rainSound);
            isPlaying = true;
        }
    });

    coffee.addEventListener('click', function() {
        if (!isPlaying) {
            coffee.classList.add('musicOn');
            coffeeSound.play();
  
            CoffeeUpdateVolume(coffeeSound);
            isPlaying = true;
        }
    });

    fire.addEventListener('click', function() {
        if (!isPlaying) {
            fire.classList.add('musicOn');
            fireSound.play();

            FireUpdateVolume(fireSound);
            isPlaying = true;
        }
    });






    //eventos para o duplo clique
    forest.addEventListener('dblclick', function() {
        forest.classList.remove('musicOn');
        forestSound.pause();
        isPlaying = false;
    });

    rain.addEventListener('dblclick', function() {
        rain.classList.remove('musicOn');
        rainSound.pause();
        isPlaying = false;
    });

    coffee.addEventListener('dblclick', function() {
        coffee.classList.remove('musicOn');
        coffeeSound.pause();
        isPlaying = false;
    });

    fire.addEventListener('dblclick', function() {
        fire.classList.remove('musicOn');
        fireSound.pause();
        isPlaying = false;
    });
}

    
    



    




   



    