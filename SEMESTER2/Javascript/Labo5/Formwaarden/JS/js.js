const setup = () => {

    const resultaat = document.getElementById("resultaat");
    resultaat.addEventListener('click', click);
}

const click = () => {
    const roker = document.getElementById("roker");
    if (roker.checked) {
        console.log("is een roker");
    } else {
        console.log("is geen roker");
    }

    const nl = document.getElementById("nl");
    const fr = document.getElementById("fr");
    const en = document.getElementById("en");

    if (nl.checked) {
        console.log("moedertaal is nl");
    } else if (fr.checked) {
        console.log("moedertaal is fr")
    } else if (en.checked) {
        console.log("moedertaal is en")
    }else {
        console.log("moedertaal is niet weergegeven.")
    }

    let buurland = document.getElementById("buurland").value;
    console.log("favoriete buurland is " + buurland);

    let bestellingOptions = document.getElementById("bestelling").options;
    let bestelling = [];
    for (let i = 0; i < bestellingOptions.length; i++) {
        let option = bestellingOptions[i];
        if(option.selected){
            bestelling.push(option);
        }
    }

    let printBestelling = "bestelling bestaat uit ";
    for (let i = 0; i < bestelling.length; i++) {
        printBestelling += bestelling[i].value + " ";
    }
    console.log(printBestelling.trim());
}

window.addEventListener("load", setup);