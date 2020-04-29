class Grid {
    constructor(dims = 16) {
        this.dims = dims;
        this.mainContainer = document.getElementById('main-container');
        this.initContainer();
        this.initGridCells();
        this.mousedown = false;
        this.mainContainer.addEventListener('mousedown', () => { this.mousedown = true; });
        this.mainContainer.addEventListener('mouseup', () => { this.mousedown = false; })
    }

    initContainer() {
        this.gridContainer = document.createElement('div');
        this.gridContainer.classList.add('grid-container');
        this.gridContainer.style.gridTemplateColumns = `repeat(${this.dims}, 1fr)`;
        this.gridContainer.style.gridTemplateRows = `repeat(${this.dims}, 1fr)`;
        this.mainContainer.appendChild(this.gridContainer);
    }

    initGridCells() {
        this.gridCells = [];
        for(let i = 0; i < this.dims; i++) {
            let row = [];
            for(let j = 0; j < this.dims; j++) {
                let gridCell = document.createElement('div');
                gridCell.classList.add('grid-cell');
                gridCell.style.background = 'rgba(0, 0, 0, 0);'
                gridCell.setAttribute('data-darkness', '0');
                this.registerListener(gridCell);
                this.gridContainer.appendChild(gridCell);
                row.push(gridCell);
            }
            this.gridCells.push(row);
        }
    }

    registerListener(gridCell) {
        gridCell.addEventListener('mouseover', () => {
            if(this.mousedown) {
                gridCell.setAttribute('data-darkness', parseFloat(gridCell.getAttribute('data-darkness')) + 0.1);
                gridCell.style.background = `rgba(0,0,0,${gridCell.getAttribute('data-darkness')})`;
            }
        });
    }

    destruct() {
        this.mainContainer.removeChild(this.gridContainer);
    }
}

export { Grid };