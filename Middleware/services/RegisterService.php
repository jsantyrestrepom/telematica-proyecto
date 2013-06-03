<?php
    
    
    require_once ('../dao/BaseDatos_mysql.php');

		//echo "debug<br />";
    $serviceObj = new RegisterService();
		// checking parameters
	if (isset($_GET['access_token']) && isset($_GET['red_social']) && isset($_GET['id_usuario'])) {
	    $id_usuario = $_GET['id_usuario'];
		$red_social = $_GET['red_social'];
		$access_token = $_GET['access_token'];
		
		$serviceObj->callRegisterService($id_usuario, $red_social, $access_token);
	} else {
		$serviceObj->error();
	}
	
	
	class RegisterService {
		
		function callRegisterService($id_usuario, $red_social, $access_token) {
			$response = '';
			$db = new BaseDatos();
			$query = "INSERT INTO tbl_usuario
				(id_usuario, red_social, access_token)
				VALUES
				($id_usuario, '$red_social', '$access_token')";
			$db->query($query);
			if ($db->affectedRows() == 1) {
				$response = array('success' => 'successful operation');
			} else {
				$response = array('error' => 'invalid data');
			}
			echo json_encode($response);
		}
			
		function error() {
			$response = array('error' => 'incorrect parameters');
			echo json_encode($response);
		}
		
	}
    
	
?>