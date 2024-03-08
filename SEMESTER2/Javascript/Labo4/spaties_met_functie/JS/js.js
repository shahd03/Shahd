const start = () => {
    const button = document.getElementById("submit");
    button.addEventListener('click', press);
}

const press = () => {
    let inputveld = document.getElementById("input").value;
    let returnTekst = "";

    while (inputveld.includes(" ")) {
        inputveld = inputveld.replace(" ", "");
    }

    for (let i = 0; i < inputveld.length; i++) {
        returnTekst += inputveld.charAt(i) + " ";
    }

    console.log(returnTekst);
}

window.addEventListener("load", start);
