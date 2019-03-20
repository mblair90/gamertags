<?php
	// Get response header to see if gamertag exists
	$gt = $_POST['input'];
	$gt_nospace = str_replace(' ', '%20', $gt);
	$url = "http://avatar.xboxlive.com/avatar/" . $gt_nospace . "/avatar-body.png";
	$res = get_headers($url);
	echo substr($res[0], 9, 3);
?>