<?php include('includes/header.php'); ?>

<body>

	<div class="container valign-wrapper">
		<div class="row">
			<div class="col s12">
				<h3>Xbox Gamertag Search</h3>
				<form id="search-form" method="POST" action="index.php">
					<input id="user-input" placeholder="Enter a gamertag" type="text" name="gamertag">
					<button class="btn waves-effect waves-light" type="submit" name="action">Check Gamertag</button>
				</form>

				<div class="col s12 noresult" id="result"></div>			

				<div class="col s12">
					<p class="center-align" id="description">A simple, lightweight tool to check if an Xbox gamertag is available.</p>
				</div>
			</div>

		</div>
	</div>

<?php include('includes/footer.php'); ?>