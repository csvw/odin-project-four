import { Wing } from './wing.js';

class EastWing extends Wing {
    constructor() {
        super();
        this.container.classList.add('east-wing')
    }
}

export { EastWing };