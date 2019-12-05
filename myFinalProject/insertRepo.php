<?php
include 'configBD';
$con = mysqli_connect($local, $usuario, $senha);
$dados = mysqli_select_db($con, $banco);
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$name = ['name'];
$fullName = ['full_name'];
$idGit = ['idGit'];
$inserir = "insert into repository (name, full_name, idGit) values ('$name', '$full_name', '$idGit')";
$sql = mysqli_query($con, $inserir);
$msg = 'Dados inseridos com sucesso!';
$json = json_encode($msg);
echo $json;
mysqli_close($con);