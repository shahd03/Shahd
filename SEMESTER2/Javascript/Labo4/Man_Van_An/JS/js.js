const setup = () => {
}

document.getElementById('count-button').addEventListener('click',  doeIets = () => {

        var inputText = document.getElementById('input').value.toLowerCase();
        var currentIndex = inputText.indexOf('an');
        var count = 0;

        while (currentIndex !== -1) {
            count++;
            currentIndex = inputText.indexOf('an', currentIndex + 2);
        }

        document.getElementById('output').innerText = 'Het aantal keer dat "an" voorkomt: ' + count;
    }
);
window.addEventListener("load", setup);
