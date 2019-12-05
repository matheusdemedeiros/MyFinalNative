<?php
include 'configBD.php';
$con = mysqli_connect($local, $usuario, $senha);
$dados = mysqli_select_db($con, $banco);
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$nome = $obj['nome'];
$senha = $obj['senha'];
$userGit = $obj['userGit'];
$inserir = "insert into user (nome, senha, userGit) values ('$nome', '$senha', '$userGit')";
$sql = mysqli_query($con, $inserir);
$msg = 'Dados inseridos com sucesso!';
$json = json_encode($msg);
echo $json;
mysqli_close($con);