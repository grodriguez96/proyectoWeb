<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    require_once('conexion.php');

    class DevolverExpedientes extends conexion{ //Conectar con la base de datos
        public function __construct() {parent::__construct();}   
        
        function obtenerExpediente(){

            if($sentencia = $this->conexion_db-> query('SELECT expediente, estado, descripcion, COUNT(expediente) AS ninos_expedientes FROM expedientes INNER JOIN niños ON expedientes.expediente= niños.numero_expediente GROUP BY expediente')){
                $resultado = $sentencia->fetch_all(MYSQLI_ASSOC);
                echo json_encode($resultado);
            }
        }
    }

    $activar = new DevolverExpedientes();
    $activar->obtenerExpediente();

    
?>