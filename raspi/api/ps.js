function login(keyId){
	var key = document.getElementById("keyId").value;
	var params = "key="+key;

	callserver("api/authenticate.php",params);
}


function execute(btn){
	var command = btn.value;
	var params = "command="+command;
	callserver("api/command.php",params);
}

function callserver(url,params){
	var http = new XMLHttpRequest();
	http.open("POST", url, true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.setRequestHeader("Key","Password1!");
	
	http.onreadystatechange = function() {//Call a function when the state changes.
	    if(http.readyState == 4 && http.status == 200) {
			var response = http.responseText;
			handleResponse(response);
	    }
	}
	http.send(params);
}

function handleResponse(response){
	
	document.getElementById("message").innerHTML = response;
	if(response == "not authorized"){
	document.getElementById("login").className = "loginoff";
	}else{
	document.getElementById("login").className = "login";
	}
}