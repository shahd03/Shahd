let personen = [];
let lastAssignedId = 0;

const bewaarBewerktePersoon = () => {
    valideer();
    let invalid = document.querySelectorAll(".invalid");
    if(invalid.length === 0){

        let person = {
            id: lastAssignedId++,
            firstname: document.querySelector("#txtVoornaam").value,
            lastname: document.querySelector("#txtFamilienaam").value,
            birthDate: document.querySelector("#txtGeboorteDatum").value,
            email: document.querySelector("#txtEmail").value,
            numberOfChildren: document.querySelector("#txtAantalKinderen").value
        }

        let index = personen.findIndex(p => p.id === person.id);
        if(index !== -1){
            personen[index] = person;
        } else {
            personen.push(person);
        }
    }

    updateSelectOptions();
};

const updateSelectOptions = () => {
    let selectPerson = document.querySelector("select");
    selectPerson.innerHTML = "";
    for (let i = 0; i < personen.length; i++) {
        let option = document.createElement("option");
        option.value = personen[i].id;
        let text = document.createTextNode(personen[i].firstname + " " + personen[i].lastname);
        option.appendChild(text);
        selectPerson.appendChild(option);
    }
};

const bewerkNieuwePersoon = () => {
    let inputFields = document.querySelectorAll("input");
    for(let inputFieldsElement of inputFields){
        if (inputFieldsElement.type === "text"){
            inputFieldsElement.value = "";
        }
    }
};

const changePerson = (event) => {
    let target = event.target;
    let id = parseInt(target.value);

    let person = personen.find(p => p.id === id);
    if(person){
        document.querySelector("#txtVoornaam").value = person.firstname;
        document.querySelector("#txtFamilienaam").value = person.lastname;
        document.querySelector("#txtGeboorteDatum").value = person.birthDate;
        document.querySelector("#txtEmail").value = person.email;
        document.querySelector("#txtAantalKinderen").value = person.numberOfChildren;
    } else {
        console.error("Invalid person ID:", id);
    }
};

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", changePerson);
};

window.addEventListener("load", setup);
