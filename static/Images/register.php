<?php
include 'config.php'; // Include the database connection file

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['Confirmpassword'];
    $college = $_POST['college'];
    $collegeid = $_POST['collegeid'];
    $contact = $_POST['contact'];

    // Basic validation
    if (empty($username) || empty($email) || empty($password) || empty($confirmPassword) || empty($college) || empty($collegeid) || empty($contact)) {
        echo "All fields are required.";
    } elseif ($password != $confirmPassword) {
        echo "Passwords do not match.";
    } else {
        // Check if the email is already registered
        $checkEmailQuery = "SELECT * FROM signup WHERE email='$email'";
        $checkEmailResult = $conn->query($checkEmailQuery);

        if ($checkEmailResult->num_rows > 0) {
            echo "Email is already registered. Please use a different email.";
        } else {
            // Insert user data into the database
            $insertQuery = "INSERT INTO signup (username, email, password, college, collegeid, contact) VALUES ('$username', '$email', '$password', '$college', '$collegeid', '$contact')";

            if ($conn->query($insertQuery) === TRUE) {
                echo "Registration successful!";
                // You can redirect to a login page or any other page here
            } else {
                echo "Error: " . $insertQuery . "<br>" . $conn->error;
            }
        }
    }
}

// Close the database connection
$conn->close();
?>
