<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require_once('conexion.php');

class DevolverUsuario extends conexion
{
    public function __construct()
    {
        parent::__construct();
    }

    public function obtenerUsuario($correo)
    {
        if ($sentencia = $this->conexion_db->query('SELECT nombre, apellido, segundo_nombre, segundo_apellido, dni, telefono, fecha_nacimiento, genero, nacionalidad, estado_civil, direccion, codigo_postal, correo, num_expediente_niño FROM usuarios WHERE correo ="' . $correo . '"')) {
            $resultado = $sentencia->fetch_all(MYSQLI_ASSOC);
            echo json_encode($resultado);
        }
    }
}

$valor = $_GET["correo"];
$activar = new DevolverUsuario();
$activar->obtenerUsuario($valor);
