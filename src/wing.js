class Wing {
    constructor() {
        this.container = document.createElement('div');
        this.container.classList.add('wing');
        this.mainContainer = document.getElementById('main-container');
        this.mainContainer.appendChild(this.container);
    }
}

export { Wing };