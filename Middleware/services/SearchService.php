<?php

	
	require_once ('../dao/BaseDatos_mysql.php');
    
    	//echo "debug<br />";
    $serviceObj = new SearchService();
		// checking parameters
	if (FALSE) {
	    		
		$serviceObj->callSearchService();
	} else {
		$serviceObj->error();
	}
	
	
	class RegisterService {
		
		function callSearchService() {
			$response = '';
			$db = new BaseDatos();
			
			echo json_encode($response);
		}
			
		function error() {
			$response = array('error' => 'incorrect parameters');
			echo json_encode($response);
		}
		
	}
    
    
?>