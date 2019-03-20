// Add event listener for form submit
document.getElementById('search-form').addEventListener('submit', function(e) {
	// Prevent form from being submitted
	e.preventDefault();
	// Store user input
	var input = document.getElementById('user-input').value;
	
	// Create new AJAX request
	var request = new XMLHttpRequest();
	// Set what to do on state change
	request.onreadystatechange = function() {
		if (request.readyState === 4 && request.status === 200) {
			// Response from AJAX request
			var res = request.responseText;
			// Check if the gamertag exists
			if (res === '200') {
				var result = document.getElementById('result');
				result.innerHTML = 'Gamertag exists!';
				result.classList.remove('noresult', 'exists', 'notexists');
				void result.offsetWidth;
				result.classList.add('center-align', 'exists');
			} else {
				var result = document.getElementById('result');
				result.innerHTML = 'Gamertag does NOT exist!';
				result.classList.remove('noresult', 'exists', 'notexists');
				void result.offsetWidth;
				result.classList.add('center-align', 'notexists');
			}
		}
	}
	// Set AJAX parameters and send with user input
	request.open('POST', 'includes/gtcheck.php', true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send('input='+input);
});