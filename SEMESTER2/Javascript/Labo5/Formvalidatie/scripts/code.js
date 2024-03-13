const setup = () => {
	let btnValideer = document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerFamilienaam();
	valideerGeboortedatum();
	valideerEmail();
	valideerAantalKinderen();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("voornaam");
	let errorVoornaam = document.getElementById("errorVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		txtVoornaam.className = "invalid";
		errorVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className = "";
		errorVoornaam.innerHTML = "";
	}
};
const valideerFamilienaam = () => {
	let familienaam = document.getElementById("familienaam");
	let errorFamilienaam = document.getElementById("errorFamilienaam");
	let familienamen = familienaam.value.trim();
	if (familienamen.length === 0) {
		familienaam.className = "invalid";
		errorFamilienaam.innerHTML = "verplicht veld";
	} else if (familienamen.length > 50) {
		familienaam.className = "invalid";
		errorFamilienaam.innerHTML = "max. 50 karakters";
	} else {
		familienaam.className = "";
		errorFamilienaam.innerHTML = "";
	}
}
const valideerGeboortedatum = () => {
	let geboortedatum = document.getElementById("geboortedatum");
	let errorGeboortedatum = document.getElementById("errorGeboortedatum");
	let geboortedatumValue = geboortedatum.value.trim();
	if (geboortedatumValue.length === 0) {
		geboortedatum.className = "invalid";
		errorGeboortedatum.innerHTML = "verplicht veld";
	} else if (!/^\d{4}-\d{2}-\d{2}$/.test(geboortedatumValue)) {
		geboortedatum.className = "invalid";
		errorGeboortedatum.innerHTML = "formaat is niet jjjj-mm-dd";
	} else {
		geboortedatum.className = "";
		errorGeboortedatum.innerHTML = "";
	}
}
const valideerEmail = () => {
	let email = document.getElementById("email");
	let errorEmail = document.getElementById("errorEmail");
	let emailValue = email.value.trim();
	if (emailValue.length === 0) {
		email.className = "invalid";
		errorEmail.innerHTML = "verplicht veld";
	} else if (!/^\S+@\S+\.\S+$/.test(emailValue)){
		email.className = "invalid";
		errorEmail.innerHTML = "geen geldig email adres";
	} else {
		email.className = "";
		errorEmail.innerHTML = "";
	}
}
const valideerAantalKinderen = () => {
	let aantalKinderen = document.getElementById("aantalKinderen");
	let errorAantalKinderen = document.getElementById("errorAantalKinderen");
	let aantalKinderenValue = parseInt(aantalKinderen.value.trim());
	if (isNaN(aantalKinderenValue)) {
		aantalKinderen.className = "invalid";
		errorAantalKinderen.innerHTML = "geen geldig getal";
	} else if (aantalKinderenValue < 0) {
		aantalKinderen.className = "invalid";
		errorAantalKinderen.innerHTML = "is geen positief getal";
	} else if (aantalKinderenValue > 99) {
		aantalKinderen.className = "invalid";
		errorAantalKinderen.innerHTML = "is te vruchtbaar";
	} else {
		aantalKinderen.className = "";
		errorAantalKinderen.innerHTML = "";
	}
}

window.addEventListener("load", setup);
