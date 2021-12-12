<?php
	// Get response header to see if gamertag exists
	$gt = $_POST['input'];
	$gt_nospace = str_replace(' ', '%20', $gt);
	// $url = "http://avatar.xboxlive.com/avatar/" . $gt_nospace . "/avatar-body.png";
	$url = "https://playerdb.co/api/player/xbox/" . $gt_nospace;
	// $res = get_headers($url);
	// echo substr($res[0], 9, 3);

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_URL, $url);

	$result = curl_exec($ch);

	echo $result;
?>