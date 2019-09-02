window.onload = function(event) {
	const copyrightYear = document.getElementById("copyright-year");
	copyrightYear.textContent = (new Date()).getFullYear();

	let form = document.getElementsByTagName("form")[0];
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		const number = document.getElementById("number").value;
		const base = document.getElementById("base").value;

		const result = convert(number, base);
		display(result);
	});

	function convert(number, base) {
		const original = number;
		let result = "";

		while (number > 0) {
			let bit;
			let quotient;

			if (number % base < 10) {
				bit = number % base;
			} else {
				bit = String.fromCharCode((number % base) + 55);
			}

			quotient = Math.floor(number / base);

			result = bit + result;
			number = quotient;
		}

		return [original, result];
	}

	function display(results) {
		const original = document.getElementById("original");
		const converted = document.getElementById("converted");

		original.textContent = results[0];
		converted.textContent = results[1];
	}
};