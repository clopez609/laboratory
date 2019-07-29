<?php
    require_once "dbLaboratory.php";

    $gateway = new Gateway();

    if( !empty($_GET) ){

        if( isset($_GET['id']) ){

            if( is_numeric($_GET['id']) ){

                if( $_GET['id'] > 0 ){

                    $value = $_GET['id'];

                    $result = $gateway->loadRevisions($value);
            
                    echo json_encode($result);
                }
                else{
                    echo json_encode(array('error' => 'error en la peticion, verifique.'));
                }
            }
        }
    }
    else {
        echo "error en la peticion";
    }
?>