const start = () => {

    const origineleZin = "Gisteren zat de jongen op de stoep en at de helft van de appel ";
    let gewijzigdeZin = "";
    let woord = "";

    for (let i = 0; i < origineleZin.length; i++) {
        const huidigKarakter = origineleZin[i];
        if (huidigKarakter === " " || i === origineleZin.length - 1) {
            if (woord.toLowerCase() === "de") {
                if (woord.charAt(0) === "D") {
                    gewijzigdeZin += "Het".charAt(0).toUpperCase() + "Het".slice(1);
                } else {
                    gewijzigdeZin += "het";
                }
            } else {
                gewijzigdeZin += woord;
            }
            if (i !== origineleZin.length - 1) {
                gewijzigdeZin += huidigKarakter;
            }
            woord = "";
        } else {
            woord += huidigKarakter;
        }
    }

    console.log(gewijzigdeZin);
};

window.addEventListener("load", start);
