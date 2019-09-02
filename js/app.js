window.onload = function(event) {
	const copyrightYear = document.getElementById("copyright-year");
	copyrightYear.textContent = (new Date()).getFullYear();

	let form = document.getElementsByTagName("form")[0];
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		const result = convert(number, base);
	});

	function convert(number, base) {
		let result = "";

		while (number > 0) {
			let bit;
			let quotient;

			if (number % base < 10) {
				bit = number % bit;
			} else {
				bit = String.fromCharCode((number % base) + 55);
			}

			quotient = Math.floor(number / base);

			result = bit + result;
			number = quotient;
		}

		return result;
	}
};