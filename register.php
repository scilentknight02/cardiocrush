<?php
include 'dbconnection.php';
if(isset($_POST['signUp'])){
    $fname=$_POST['fname'];
    $mname=$_POST['mname'];
    $lname=$_POST['lname'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $dob=$_POST['dob'];
    $password=$_POST['password'];
    $cpassword=$_POST['cpassword'];

    $sql="insert into user_account
    values(null,'$fname', '$mname', '$lname', '$email', '$phone', '$dob', '$password')";
    $result=mysqli_query($conn, $sql);
    if($result){
        echo "<br>Data has been inserted sucessfully.";
    }
    else{
        die("<br>Data has not been insert due to".mysqli_error($conn));
    }
}
?>