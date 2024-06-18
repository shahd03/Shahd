let global = {
    vragen: [],
    correctAntwoorden: [],
    highscores: [], //array van getallen
    huidigeVraag: 0, //cijfer aangeeft welke vraag er op het scherm getoond.
    timeout: null,
    tries: 0,
}

const setup = () => {
    let vraag1 = {
        question: "Wie is de hoofdpersoon in Final Fantasy VII Remake?",
        answers: ["Cloud Strife", "Sephiroth", "Tifa Lockhart"],
        correct: "Cloud Strife",
        selected: ""
    }
       let vraag2 = {
                question: "Welke wereld wordt verkend in Final Fantasy XV?",
                answers: ["Gaia", "Eos", "Spira", "Cocoon"],
                correct: "Eos",
                selected: ""
            }
    let vraag3 = {
                question: "Wie is de antagonist in Final Fantasy VIII?",
                answers: ["Ultimecia", "Kefka", "Seymour", "Kuja", "Edea"],
                correct: "Ultimecia",
                selected: ""
            }
    let vraag4 = {
                question: "Heeft hoofdrolspeler in Final Fantasy IX een staart?",
                answers: ["Ja", "Nee"],
                correct: "Ja",
                selected: ""
            }
           let vraag5 = {
                question: "Hoe heet de stad waarin het verhaal van Final Fantasy VII Remake begint?",
                answers: ["Midgar", "Junon", "Nibelheim", "Wutai"],
                correct: "Midgar",
                selected: ""
            }
             let vraag6 = {
                question: "Welke summon is prominent aanwezig in Final Fantasy XV?",
                answers: ["Ifrit", "Shiva", "Ramuh", "Titan"],
                correct: "Ifrit",
                selected: ""
            }
             let vraag7 = {
                question: "Wat is de naam van het luchtschip in Final Fantasy VIII?",
                answers: ["Ragnarok", "Highwind", "Invincible", "Falcon"],
                correct: "Ragnarok",
                selected: ""
            }
             let vraag8 = {
                question: "Welke rol vervult Cid Highwind in Final Fantasy VII?",
                answers: ["Luchtschipkapitein", "Wapensmid", "Koning"],
                correct: "Luchtschipkapitein",
                selected: ""
            }
             let vraag9 = {
                question: "Wat is het kenmerkende aan Cactuar-wezens in de Final Fantasy-serie?",
                answers: ["Ze zijn altijd groen", "Ze gebruiken de aanval 1000 Needles", "Ze zijn planten"],
                correct: "Ze gebruiken de aanval 1000 Needles",
                selected: ""
            }
            let vraag10 = {
                question: "Welk Final Fantasy-wezen zorgt, met zijn aanval genaamd Bad Breath, voor verschillende statuseffecten?",
                answers: ["Malboro", "Chocobo", "Behemoth", "Tonberry"],
                correct: "Malboro",
                selected: ""
            };

    let startbtn =  document.getElementById("start");
    let restartbtn = document.getElementById("restart");
    let submitbtn = document.getElementById("submit");
    let resetbtn = document.getElementById("reset");

    refreshHighscores(false);
    resetbtn.addEventListener("click", clearHighscores);
    restartbtn.addEventListener("click", newQuiz);
    startbtn.focus();
}

const clearHighscores = () => {
    localStorage.setItem("highscores", "");
    global.history = [];
    resetHighscoreField();
}

const newQuiz = () => {
        document.getElementById("restart").hidden = true;
        document.getElementById("quiz").disabled = false;
        let begin = document.getElementById("start");
    begin.disabled = false;
    begin.addEventListener("click", checkAnswer);

    generateQuestion();
}

const checkAnswer = () => {
    let answer = document.getElementById("answers")
    if (answer === correctAntwoorden) {
        global.tries++;
        document.getElementById("answers").value = "";


    }

    const generateQuestion = () => {
        let indexVraag = Math.ceil(Math.random() * global.vragen.length) - 1;
        global.huidigeVraag = global.vragen[indexVraag];
    }

    const restoreQuiz = () => {
        global.tries = 0;
        document.getElementById("quiz").disabled = true;
        document.getElementById("start").disabled = true;
        document.getElementById("reset").hidden = false;
    }

    const finished = () => {
        addNewHighscore();
        restoreQuiz();
    }

    const addNewHighscore = () => {
        score = {
            tries: global.tries,
            date: Date.now()
        }
        global.highscores.push(score);
        refreshHighscores(true);
    }

    const resetHighscoreField = () => {
        let highscoreDiv = document.getElementById("highscores");
        highscoreDiv.innerHTML = "<h2>Highscores <button id=\"reset\" class=\"badge text-bg-secondary\">Reset</button></h2>";
        document.getElementById("reset").addEventListener("click", clearHighscores);
    }

    const refreshHighscores = (endOfGame) => {
        if (!endOfGame) {
            if (localStorage.getItem("highscores") !== "" && localStorage.getItem("highscores") !== null) {
                global.highscores = JSON.parse(localStorage.getItem("highscores"))
            } else {
                global.highscores = [];
                localStorage.setItem("highscores", "");
            }
        } else {
            let highscoreString = JSON.stringify(global.highscores);
            localStorage.setItem("highscores", highscoreString);
        }

        if (global.highscores.length !== 0) {
            let listElements = document.createElement("ol");
            listElements.setAttribute("type", 1);

            sortList();
            for (let i = 0; i < global.highscores.length; i++) {
                let highscoreItem = document.createElement("li");

                let score = global.highscores[i];
                let datum = new Date(score.date);
                highscoreItem.innerHTML = `"Gestart op" ${getFormattedString(datum)}`;
                listElements.appendChild(highscoreItem);
            }
            resetHighscoreField();
            document.getElementById("highscores").appendChild(listElements);
        }
    }

    const sortList = () => {
        let list = global.highscores;
        let item = null;
        let foundIndex = -1;
        let sortedList = [];

        while (list.length !== 0) {
            for (let i = 0; i < list.length; i++) {
                if (i === 0 || item.tries > list[i].tries) {
                    item = list[i];
                    foundIndex = i;
                }
            }
            list.splice(foundIndex, 1);
            sortedList.push(item);
        }
        global.highscores = sortedList;
        localStorage.setItem("highscores", JSON.stringify(global.highscores));
    }

    const getFormattedString = (date) => {
        let output = "";
        output += date.getDate();
        output += " " + getMaand(date.getMonth());
        output += " " + date.getFullYear();
        output += " " + date.getHours();
        output += ":" + date.getMinutes();
        return output;
    }

    const getMaand = (index) => {
        let maanden = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
        return maanden[index];
    }

}
window.addEventListener("load", setup);
