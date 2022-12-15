<?php 
include_once __DIR__ . '/../db/index.php';

$arrayDischi = [];

if( !empty($_GET) && !empty($_GET['genre'] ) ){

    foreach( $database as $elem ){

      if( $elem['genre'] == $_GET['genre'] ){
        $arrayDischi[] = $elem;
      }
    }

  } else {

        $arrayDischi = $database;
  }

// foreach($database as $elem){

//     $arrayDischi[] = $elem ;
// }

header('Content-type: application/json');

echo json_encode( $arrayDischi );
?>