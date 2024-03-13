const setup = () => {

    let input;
    let gemeente = [];
    input = prompt("Gemeente:");

    while (input.toLowerCase().trim() !== 'stop') {
        if (input.trim() !== '') { // Controleren op lege invoer
            gemeente.push(input);
        }
        input = prompt("Gemeente:");
    }

    gemeente.sort((a, b) => a.localeCompare(b, 'nl'));

    for (let i = 0; i < gemeente.length; i++) {
        let option = document.createElement("option");
        option.text = gemeente[i];
        option.value = gemeente[i];
        document.getElementById('gemeente').add(option);
    }
}

window.addEventListener("load", setup);
