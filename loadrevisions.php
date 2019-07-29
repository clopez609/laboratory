<?php
    require_once "dbLaboratory.php";

    $gateway = new Gateway();

    if( !empty($_GET) ){

        if( isset($_GET['id']) ){

            if( is_numeric($_GET['id']) ){

                if( $_GET['id'] > 0 ){

                    $value = $_GET['id'];

                    $result = $gateway->loadRevisions($value);
            
                    echo json_encode(array('success' => 1, $result));
                }
                else{
                    echo json_encode(array('success' => 0));
                }
            }
        }
    }
    else {
        echo "Error: La petición GET llego vacía.";
    }
?>