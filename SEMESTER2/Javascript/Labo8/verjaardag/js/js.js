const setup = () => {

    let geboortedatum = new Date("2003-10-04");
    let vandaag = new Date();
    let verschilInTijd = vandaag.getTime() - geboortedatum.getTime();
    let dagen = Math.floor(verschilInTijd / (1000 * 60 * 60 * 24));

    console.log("Het aantal dagen tussen mijn verjaardag en de huidige datum is: " + dagen + " dagen.");
};
window.addEventListener("load", setup);