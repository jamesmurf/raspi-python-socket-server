<?php

	session_start();
	if(isset($_SESSION['authorized'])){
		if($_SESSION['authorized'] = "LOGGEDIN"){
					if(isset($_POST['command'])){
						$command = $_POST['command'];
						echo "executing  ".$command;
						$res = shell_exec("python execute.py ".$command);
						echo $res;
					}else{
						echo "no command specified";
					}
		}
		
	}else{
		echo "not authorized";
	}	
?>
