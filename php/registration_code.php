<?php 
    require_once("connection.php");

    $user_id = $email = $username = $password = $pwd = "";

    $email = $_POST['email'];
    $username = $_POST['username'];
    $pwd = $_POST['password'];
    $password = MD5($pwd);

    $sql = "INSERT INTO users (email, username, password) VALUES ('$email', '$username', '$password')";
    $result = mysqli_query($conn, $sql);
    if($result)
    {
        header("Location: ../pages/fooldal");
    }
    else
    {
        echo "valami nem jo gec: ".$sql;
    }
?>