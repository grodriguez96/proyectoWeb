<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require_once('conexion.php');

class ActualizarUsuario extends conexion
{

    public function __construct()
    {
        parent::__construct();
    }


    public function actualizarUsuario($usuario)
    {

        $nombre = strtoupper($usuario->nombre);
        $segundo_nombre = strtoupper($usuario->segundo_nombre);
        $apellido = strtoupper($usuario->apellido);
        $segundo_apellido = strtoupper($usuario->segundo_apellido);
        $dni = $usuario->dni;
        $telefono = $usuario->telefono;
        $fecha_nacimiento = $usuario->fecha_nacimiento;
        $genero = strtoupper($usuario->genero);
        $nacionalidad = strtoupper($usuario->nacionalidad);
        $estado_civil = strtoupper($usuario->estado_civil);
        $direccion = strtoupper($usuario->direccion);
        $codigo_postal = $usuario->codigo_postal;
        $correo = $usuario->correo;


        if ($sentencia = $this->conexion_db->query("UPDATE usuarios SET nombre ='" . $nombre . "',segundo_nombre='" . $segundo_nombre . "',apellido='" . $apellido . "',segundo_apellido='" . $segundo_apellido . "',dni='" . $dni . "',fecha_nacimiento='" . $fecha_nacimiento . "',nacionalidad='" . $nacionalidad . "',estado_civil='" . $estado_civil . "',direccion='" . $direccion . "',codigo_postal='" . $codigo_postal . "',telefono='" . $telefono . "',genero='" . $genero . "' WHERE correo='" . $correo . "'"))
            echo json_encode($sentencia); {
        }
    }
}

$datos = file_get_contents('php://input');
$usuario = json_decode($datos);

$activar = new ActualizarUsuario();
$activar->actualizarUsuario($usuario);
