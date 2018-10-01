<?php
	// Sends curl request
	function exists($url) {
		
	    //Get HTTP response code
	    $res = get_headers($url);
	    return substr($res[0], 9, 3);

	} 
?>