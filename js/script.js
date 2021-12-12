var spinner = document.getElementById('ajax-loader');
spinner.style.display = "none";

// Add event listener for form submit
document.getElementById('search-form').addEventListener('submit', function(e) {
	// Prevent form from being submitted
	e.preventDefault();
	// Store user input
	var input = document.getElementById('user-input').value;

	// Display AJAX loader
	spinner.style.display = "flex";
	
	// Create new AJAX request
	var request = new XMLHttpRequest();
	// Set what to do on state change
	request.onreadystatechange = function() {
		if (request.readyState === 4 && request.status === 200) {
			// Hide AJAX loader
			spinner.style.display = "none";
			// Response from AJAX request
			var res = request.responseText;
			// Turn JSON into JS object
			var res_parsed = JSON.parse(res);

			// Check if the gamertag exists and update result div


			// if (res === '200') {
			// 	var result = document.getElementById('result');
			// 	result.innerHTML = 'Gamertag exists!';
			// 	result.classList.remove('noresult', 'exists', 'notexists');
			// 	// Quick fix to replay CSS animation
			// 	void result.offsetWidth;
			// 	result.classList.add('center-align', 'exists');
			// } else {
			// 	var result = document.getElementById('result');
			// 	result.innerHTML = 'Gamertag does NOT exist!';
			// 	result.classList.remove('noresult', 'exists', 'notexists');
			// 	// Quick fix to replay CSS animation
			// 	void result.offsetWidth;
			// 	result.classList.add('center-align', 'notexists');
			// }

			console.log(res_parsed);

			if (res_parsed.code === 'xbox.not_found') {
				var result = document.getElementById('result');
				result.innerHTML = 'Gamertag does NOT exist!';
				result.classList.remove('noresult', 'exists', 'notexists');
				// Quick fix to replay CSS animation
				void result.offsetWidth;
				result.classList.add('center-align', 'notexists');
			} else if (res_parsed.code === 'player.found') {
				var result = document.getElementById('result');
				result.innerHTML = 'Gamertag exists!';
				result.classList.remove('noresult', 'exists', 'notexists');
				// Quick fix to replay CSS animation
				void result.offsetWidth;
				result.classList.add('center-align', 'exists');
			}

		}
	}
	// Set AJAX parameters and send with user input
	request.open('POST', 'includes/gtcheck.php', true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send('input='+input);
});