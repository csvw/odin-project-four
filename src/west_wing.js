import { Wing } from './wing.js';

class WestWing extends Wing {
    constructor() {
        super();
        this.container.classList.add('west-wing');
        this.initResetButton();
        this.initResolutionSlider();
    }

    initResetButton() {
        this.resetButton = document.createElement('button');
        this.resetButton.textContent = 'Reset Sketchpad';
        this.resetButton.classList.add('reset-button');
        this.container.appendChild(this.resetButton);
    }

    initResolutionSlider() {
        this.createResolutionNodes();
        this.setResolutionAttributes();
        this.addResolutionNodes();
    }

    createResolutionNodes() {
        this.resolutionContainer = document.createElement('div');
        this.resolutionTitle = document.createElement('h5');
        this.resolutionText = document.createTextNode('Adjust Resolution');
        this.resolutionSlider = document.createElement('input');
    }

    setResolutionAttributes() {
        this.resolutionTitle.style.paddingBottom = '1rem';
        this.resolutionTitle.style.paddingTop = '.15rem';
        this.resolutionSlider.setAttribute('type', 'range');
        this.resolutionSlider.setAttribute('min', '8');
        this.resolutionSlider.setAttribute('max', '64');
        this.resolutionSlider.value = 16;
        this.resolutionContainer.classList.add('resolution-slider');
    }

    addResolutionNodes() {
        this.resolutionTitle.appendChild(this.resolutionText);
        this.resolutionContainer.appendChild(this.resolutionTitle);
        this.resolutionContainer.appendChild(this.resolutionSlider);
        this.container.appendChild(this.resolutionContainer);
    }

    setResetCallback(func) {
        this.resetButton.addEventListener('click', func);
    }

    setSliderCallback(func) {
        this.sliderClicked = false;
        this.resolutionSlider.addEventListener('mousedown', () => { this.sliderClicked = true; });
        this.resolutionSlider.addEventListener('mouseup', () => { 
            if(this.sliderClicked) {
                this.sliderClicked = false;
                func();
            }
        });
    }
}

export { WestWing };