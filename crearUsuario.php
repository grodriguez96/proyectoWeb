<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require_once('conexion.php');

class CrearUsuario extends conexion
{

    public function __construct()
    {
        parent::__construct();
    }


    public function crearUsuario($usuario)
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


        if ($sentencia = $this->conexion_db->query("INSERT INTO usuarios (nombre, apellido, segundo_nombre, segundo_apellido, dni, telefono, fecha_nacimiento, genero, nacionalidad, estado_civil, direccion, codigo_postal,correo) 
        VALUES('$nombre', '$apellido', '$segundo_nombre', '$segundo_apellido', '$dni', '$telefono', '$fecha_nacimiento', '$genero', '$nacionalidad', '$estado_civil', '$direccion', '$codigo_postal','$correo')"))
            echo json_encode($sentencia); {
        }
    }
}

$datos = file_get_contents('php://input');
$usuario = json_decode($datos);

$activar = new CrearUsuario();
$activar->crearUsuario($usuario);
