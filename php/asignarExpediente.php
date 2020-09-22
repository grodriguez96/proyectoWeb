<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require_once('conexion.php');

class AsignarExpediente extends conexion
{

    public function __construct()
    {
        parent::__construct();
    }


    public function asignarExpediente($datos)
    {
        $correo = $datos->correo;
        $expediente = $datos->numeroExpediente;

        if ($sentencia = $this->conexion_db->query('UPDATE usuarios SET num_expediente_niño ="' . $expediente . '" WHERE correo="' . $correo . '"')) {
            $this->conexion_db->query('UPDATE expedientes SET estado= 1 WHERE expediente ="' . $expediente . '"');
        }

        echo json_encode($sentencia);
    }
}

$recibo = file_get_contents('php://input');
$datos = json_decode($recibo);

$activar = new AsignarExpediente();
$activar->asignarExpediente($datos);
