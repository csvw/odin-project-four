import { Grid } from "./grid.js";
import { WestWing } from './west_wing.js';
import { EastWing } from './east_wing.js';
import { Title } from './title.js';

document.body.onload = init;

function init() {
    let mainContainer = document.getElementById('main-container');
    mainContainer.classList.add('main-container');
    let title = new Title();
    let grid = new Grid();
    let westWing = new WestWing();
    let eastWing = new EastWing();

    let gridSize = 16;

    westWing.setResetCallback(() => { 
        grid.destruct();
        grid = new Grid(gridSize);
    })

    westWing.setSliderCallback(() => {
        gridSize = westWing.resolutionSlider.valueAsNumber;
        grid.destruct();
        grid = new Grid(gridSize);
    })
}