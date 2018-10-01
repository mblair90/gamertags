<?php include('includes/functions.php'); ?>
<?php include('includes/header.php'); ?>

<body>

	<div class="container valign-wrapper">
		<div class="row">
			<div class="col s12">
				<h3>Xbox Gamertag Search</h3>
				<form method="POST" action="index.php">
					<input placeholder="Enter a gamertag" type="text" name="gamertag">
					<button class="btn waves-effect waves-light" type="submit" name="action">Check Gamertag</button>
				</form>


			<div class="col s12 noresult" id="result"></div>

				<?php 
					//Checks if a POST request was made
					if(isset($_POST["gamertag"])) {
						$gt = $_POST["gamertag"];
						//Removes spaces from gamertags
						$gt_nospace = str_replace(' ', '%20', $gt);
						//Sets URL
						$url = "http://avatar.xboxlive.com/avatar/" . $gt_nospace . "/avatar-body.png";

						//Runs exists function
						if(exists($url) == 200) {
							echo "<script>
								var result = document.getElementById('result');
								result.innerHTML = 'Gamertag exists!';
								result.className = 'center-align exists';
								</script>";
						} else {
							echo "<script>
								var result = document.getElementById('result');
								result.innerHTML = 'Gamertag does NOT exist!';
								result.className = 'center-align notexists';
								</script>";
						}
					}
				?>
			

			<div class="col s12">
				<p class="center-align" id="description">A simple, lightweight tool to check if an Xbox gamertag is available.</p>
			</div>
		</div>

	</div>



<?php include('includes/footer.php'); ?>