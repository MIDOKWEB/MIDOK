<?php 

require_once('connection.php');
$username = $password = $pwd = '';

$username = $_POST['username'];
$pwd = $_POST['password'];
$password = MD5($pwd);

$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";

$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0)
{
    while ($row = mysqli_fetch_assoc($result))
    {
        $id = $row['id'];
        $username = $row['username'];
        session_start();
        $_SESSION['id'] = $id;
        $_SESSION['username'] = $username;
    }
    header("Location: ../pages/fooldal");
}
else
{
    echo "Helytelen felhasználónév vagy jelszó";
}
?>