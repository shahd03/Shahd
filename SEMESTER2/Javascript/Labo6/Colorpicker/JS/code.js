const initialize = () => {

    const sliders = document.querySelectorAll(".slider");
    const swatch = document.getElementById("swatch");
    const saveButton = document.querySelector("#save");
    const savedColorsContainer = document.querySelector("#saveColors");

    const update = () => {
        const red = document.getElementById("sldRed").value;
        const green = document.getElementById("sldGreen").value;
        const blue = document.getElementById("sldBlue").value;

        document.getElementById("lblRed").innerHTML = red;
        document.getElementById("lblGreen").innerHTML = green;
        document.getElementById("lblBlue").innerHTML = blue;

        swatch.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }

    const saveColor = () =>  {
        const copy = swatch.cloneNode(true);
        copy.classList.add("saveColor");

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.setAttribute('type', 'button');
        deleteButton.textContent = "X";

        copy.appendChild(deleteButton);
        savedColorsContainer.appendChild(copy);
    }

    const deleteColor = (event) => {
        if (event.target && event.target.classList.contains('delete')) {
            const remove = event.target.closest('.saveColor');
            remove.remove();
        }
    }

    sliders.forEach(slider => {
        slider.addEventListener("change", update);
        slider.addEventListener("input", update);
    });

    saveButton.addEventListener('click', saveColor);
    savedColorsContainer.addEventListener('click', deleteColor);

    update();
};

window.addEventListener("load", initialize);
