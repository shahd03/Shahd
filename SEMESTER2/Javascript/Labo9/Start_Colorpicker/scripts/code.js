const initialize = () => {

    document.getElementById("btnSave").addEventListener("click", saveSwatch);
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {

        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    restoreSliderValues();
    restoreSwatches();
    update();
};

const saveSwatch = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    addSwatchComponent(red, green, blue);
    storeSwatches();
    setColorPickerFromSwatch();
};


const setColorPickerFromSwatch = (event) => {
    if (event && event.target.className === "swatch") {
        document.getElementById("sldRed").value =  event.target.dataset.red;
        document.getElementById("sldGreen").value =  event.target.dataset.green;
        document.getElementById("sldBlue").value = event.target.dataset.blue;

        update();
    }
};


const deleteSwatch = (event) => {
    let swatchComponents = document.getElementById("swatchComponents");
    let button = event.target;
    let swatch = button.parentNode;
    swatchComponents.removeChild(swatch);
    storeSwatches();
};

const update = () => {
    let red = document.getElementById("sldRed").value;
    document.getElementById("lblRed").innerHTML = red;

    let green = document.getElementById("sldGreen").value;
    document.getElementById("lblGreen").innerHTML = green;

    let blue = document.getElementById("sldBlue").value;
    document.getElementById("lblBlue").innerHTML = blue;

    let swatch = document.getElementById("swatch");
    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";

    storeSliderValues();
};

window.addEventListener("load", initialize);