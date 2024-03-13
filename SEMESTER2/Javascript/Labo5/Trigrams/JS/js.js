const start = () => {

    let word = "onoorbaar";

    for (let i = 0; i < word.length - 2; i++) {
        const string = word.substring(i, i + 3);
        console.log(string);

    }
}

window.addEventListener("load", start);