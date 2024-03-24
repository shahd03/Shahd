const setup = () => {
	const selectElement = document.getElementById("staat");
	const imageZei = document.getElementById("img");
	const imageEi = document.getElementById("img.with-egg");
	const noteElement = document.getElementById("note");

	selectElement.addEventListener("change", () => {
		const selectedValue = selectElement.value;
		if (selectedValue === "Met een ei") {
			imageEi.innerHTML = `<img src="../images/with-egg.png" alt="Kip met ei">`;
			imageZei.classList.remove("hidden");
			noteElement.textContent = "Hierboven, een kip met een ei";
		} else if (selectedValue === "Zonder ei") {
			imageZei.innerHTML = `<img src="../images/without-egg.png" alt="Kip zonder ei">`;
			imageEi.classList.remove("hidden");
			noteElement.textContent = "Hierboven, een kip zonder een ei";
		} else {
			imageZei.classList.add("hidden");
			noteElement.textContent = "";
		}
	});

	const input = document.getElementById('input');
	const output = document.getElementById('output');

	input.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			const searchTerm = input.value.toLowerCase();
			const inputText = "Hierboven, een kip zonder een ei".toLowerCase();
			const regex = new RegExp(searchTerm, 'gi');
			const matchCount = (inputText.match(regex) || []).length;
			output.innerHTML = `Letter "${searchTerm}" komt ${matchCount} keer voor in de bovenstaande zin.`;
		}
	});
};

window.addEventListener("load", setup);
