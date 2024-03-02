<?php
include 'config.php'; // Include the database connection file

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Basic validation
    if (empty($email) || empty($password)) {
        echo "Email and password are required.";
    } else {
        // Check if the user with the provided email exists
        $checkUserQuery = "SELECT * FROM signup WHERE email='$email'";
        $checkUserResult = $conn->query($checkUserQuery);

        if ($checkUserResult->num_rows > 0) {
            // User found, verify the password
            $userRow = $checkUserResult->fetch_assoc();
            if (password_verify($password, $userRow['password'])) {
                echo "Login successful!";
                // You can redirect to a dashboard or any other page here
            } else {
                echo "Invalid password.";
            }
        } else {
            echo "User with this email does not exist.";
        }
    }
}

// Close the database connection
$conn->close();
?>
