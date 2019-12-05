<?php
include 'configBD';
$con = mysqli_connect($local, $usuario, $senha);
$dados = mysqli_select_db($con, $banco);
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$nome = $obj['nome'];
$selecionar = "select * from user where nome = '$nome'";
$sql = mysqli_query($con, $selecionar);
$cont = mysqli_num_rows($sql);
if($cont == 0){
    $vetor[] = "Usuario ou senha invalidos!!";
}else{
    
    while ($informacao = mysqli_fetch_assoc($sql)){
        $idUser = $informacao['idUser'];
    }
    
    $selecionar = "select * from repository where idUser = '$idUser'";
    $sql = mysqli_query($con, $selecionar);
    while ($informacao = mysqli_fetch_assoc($sql)){
        $name = $informacao['name'];
        $fullName = $informacao['full_name'];
        $idGit = $informacao['idGit'];
    }

        $vetor[] = $name . " " . $fullName . " " . $idGit;
        }
}
$msg = $vetor;
$json = json_encode($msg);
echo $json;
mysqli_close($con);