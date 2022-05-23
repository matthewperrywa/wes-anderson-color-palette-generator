// the following arrays are the base color palettes. they contain 5 colors each, which are in the form of RGB values
const bottleRocket = [[218, 209, 201], [222, 163, 111], [64, 85, 41], [43, 37, 76], [188, 75, 47]];
const rushmore = [[219, 176, 101], [221, 177, 139], [45, 96, 73], [67, 61, 103], [208, 52, 47]];
const royalTenenbaums = [[224, 207, 203], [165, 196, 207], [87, 91, 123], [200, 43, 39], [166, 99, 39]];
const lifeAquatic = [[119, 169, 180], [72, 136, 162], [237, 184, 29], [209, 156, 44], [211, 47, 39]];
const darjeelingLimited = [[96, 171, 198], [23, 139, 118], [225, 158, 52], [227, 120, 47], [208, 32, 56]];
const fantasticMrFox = [[84, 152, 183], [198, 121, 56], [221, 195, 50], [207, 122, 48], [151, 32, 41]];
const moonriseKingdom = [[223, 205, 173], [134, 176, 165], [225, 177, 45], [148, 112, 50], [139, 26, 34]];
const grandBudapestHotel = [[84, 123, 134], [82, 73, 90], [185, 143, 137], [225, 154, 138], [234, 126, 130]];

// the base color palettes are all added to an array
const colorPalettes = [bottleRocket, rushmore, royalTenenbaums, lifeAquatic, darjeelingLimited, fantasticMrFox, moonriseKingdom, grandBudapestHotel];

const columnOne = document.querySelector("#columnOne");
const contextOne = columnOne.getContext("2d");
const columnTwo = document.querySelector("#columnTwo");
const contextTwo = columnTwo.getContext("2d");
const columnThree = document.querySelector("#columnThree");
const contextThree = columnThree.getContext("2d");
const columnFour = document.querySelector("#columnFour");
const contextFour = columnFour.getContext("2d");
const columnFive = document.querySelector("#columnFive");
const contextFive = columnFive.getContext("2d");
const textOne = document.querySelector("#textOne");
const textTwo = document.querySelector("#textTwo");
const textThree = document.querySelector("#textThree");
const textFour = document.querySelector("#textFour");
const textFive = document.querySelector("#textFive");
const randomizeButton = document.querySelector("#randomizeButton");

randomizeButton.addEventListener("click", randomizeColors);

randomizeColors();

/**
 * Description: Randomly generates a color palette inspired by the color palettes in Wes Anderson movies.
 * Post-Condition: The 5 displayed color squares and their corresponding RGB values will change.
 */
function randomizeColors(){

    // a base palette is selected at random
    let selectedPalette = colorPalettes[Math.floor(Math.random() * 8)];

    let maxSubtractedValue = 55; // the most a base color's R, G, or B value can be decreased by
    let maxAddedValue = 55; // the most a base color's R, G, or B value can be increased by

    // determines if either of the max values need to be changed depending on the RGB values of the current palette
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 3; j++){
            if(colorPalettes[i][j] < maxSubtractedValue){
                maxSubtractedValue = colorPalettes[i][j];
            }
            if(255 - colorPalettes[i][j] < maxAddedValue){
                maxAddedValue = colorPalettes[i][j];
            }
        }
    }

    // determines if RGB values will be added or subtracted
    let addOrSubtract = Math.floor(Math.random() * 2);

    let newColorPalette = [[], [], [], [], []];

    // determines if the R, G, or B value of each color will change
    let colorToChange = Math.floor(Math.random() * 4);

    // the following if else statement is where the new color palette is generated
    if(addOrSubtract == 0){
        let addValue = Math.floor(Math.random() * (maxAddedValue + 1));
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 3; j++){
                if(j == colorToChange){
                    newColorPalette[i][j] = selectedPalette[i][j];
                }
                else{
                    newColorPalette[i][j] = selectedPalette[i][j] + addValue;
                    if(newColorPalette[i][j] > 255){
                        newColorPalette[i][j] = 255;
                    }
                }
            }
        }
    }
    else{
        let subtractValue = Math.floor(Math.random() * (maxSubtractedValue + 1));
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 3; j++){
                if(j == colorToChange){
                    newColorPalette[i][j] = selectedPalette[i][j];
                }
                else{
                    newColorPalette[i][j] = selectedPalette[i][j] - subtractValue;
                    if(newColorPalette[i][j] < 0){
                        newColorPalette[i][j] = 0;
                    }
                }
            }
        }
    }

    // the squares and text on the web page are changed to match the new color palette
    contextOne.fillStyle = `rgb(${newColorPalette[0][0]}, ${newColorPalette[0][1]}, ${newColorPalette[0][2]})`;
    contextOne.fillRect(0, 0, 150, 150);
    textOne.textContent = `${newColorPalette[0][0]}, ${newColorPalette[0][1]}, ${newColorPalette[0][2]}`;
    contextTwo.fillStyle = `rgb(${newColorPalette[1][0]}, ${newColorPalette[1][1]}, ${newColorPalette[1][2]})`;
    contextTwo.fillRect(0, 0, 150, 150);
    textTwo.textContent = `${newColorPalette[1][0]}, ${newColorPalette[1][1]}, ${newColorPalette[1][2]}`;
    contextThree.fillStyle = `rgb(${newColorPalette[2][0]}, ${newColorPalette[2][1]}, ${newColorPalette[2][2]})`;
    contextThree.fillRect(0, 0, 150, 150);
    textThree.textContent = `${newColorPalette[2][0]}, ${newColorPalette[2][1]}, ${newColorPalette[2][2]}`;
    contextFour.fillStyle = `rgb(${newColorPalette[3][0]}, ${newColorPalette[3][1]}, ${newColorPalette[3][2]})`;
    contextFour.fillRect(0, 0, 150, 150);
    textFour.textContent = `${newColorPalette[3][0]}, ${newColorPalette[3][1]}, ${newColorPalette[3][2]}`;
    contextFive.fillStyle = `rgb(${newColorPalette[4][0]}, ${newColorPalette[4][1]}, ${newColorPalette[4][2]})`;
    contextFive.fillRect(0, 0, 150, 150);
    textFive.textContent = `${newColorPalette[4][0]}, ${newColorPalette[4][1]}, ${newColorPalette[4][2]}`;

}