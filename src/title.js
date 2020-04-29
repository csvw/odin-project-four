class Title {
    constructor() {
        this.initNodes();
        this.styleNodes();
        this.appendNodes();
    }

    initNodes() {
        this.mainContainer = document.getElementById('main-container');
        this.title = document.createElement('h1');
        this.titleText = document.createTextNode('Etch A Sketch');
        this.titleContainer = document.createElement('div');
    }

    styleNodes() {
        this.titleContainer.classList.add('title-container');
        this.title.classList.add('title');
    }

    appendNodes() {
        this.title.appendChild(this.titleText);
        this.titleContainer.appendChild(this.title);
        this.mainContainer.appendChild(this.titleContainer);
    }
}

export { Title };