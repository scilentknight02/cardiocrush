<?php
include 'dbconnection.php';

if (isset($_POST['signIn'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if email exists
    $check_email_query = "SELECT * FROM user_account WHERE email = ?";
    $stmt = $conn->prepare($check_email_query);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user_account = $result->fetch_assoc();

        // Verify the password
        if($password === $user_account['password']) {
            // Start a session and redirect to index.php
            session_start();
            $_SESSION['user_account'] = $user_account; // Store user info in the session
            header("Location: ./assets/index.html");
            exit();
        } else {
            echo "Login unsuccessful: Incorrect email or password.";
            exit();
        }
    } else {
        echo "Login unsuccessful: Credentials did not match.";
        exit();
    }
} else {
    echo "Invalid request.";
    exit();
}
?>
