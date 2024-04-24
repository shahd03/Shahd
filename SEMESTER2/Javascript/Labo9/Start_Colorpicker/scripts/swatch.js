const addSwatchComponent = (red, green, blue) => {

    let swatch = buildSwatchComponent(red, green, blue);
    document.getElementById("swatchComponents").append(swatch);

}

const configureSwatch = (swatch, red, green, blue) => {

    swatch.setAttribute("data-red", red);

    swatch.setAttribute("data-green", green);

    swatch.setAttribute("data-blue", blue);

    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";
};

const buildSwatchComponent = (red, green, blue) => {


        let swatch = document.createElement("div");
        let btnDelete = document.createElement("input");

        swatch.className = "swatch";
        configureSwatch(swatch, red, green, blue);
        swatch.addEventListener("click", setColorPickerFromSwatch);

        btnDelete.setAttribute("type", "button");
        btnDelete.setAttribute("value", "X");
        btnDelete.addEventListener("click", deleteSwatch);

        swatch.appendChild(btnDelete);
        return swatch;
    };


