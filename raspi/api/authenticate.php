<?php
	session_start();
		
	$secretkey = "choppa";
	
	if(isset($_POST['key'])){
	 
	 
			$key = $_POST['key'];

			if($key == $secretkey){
				echo ("get to the choppa");
				$_SESSION['authorized'] = "LOGGEDIN";
			}else{
				session_unset();
				echo "not authorized";
			}
	
	}else{
			session_unset();
			echo "not authorized";
	}

?>
