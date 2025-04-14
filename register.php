<?php
session_start();
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve and sanitize input
    $username = trim($_POST['username']);
    $email    = trim($_POST['email']);
    $password = $_POST['password'];

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert user into database
    $stmt = $pdo->prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)');
    try {
        $stmt->execute([$username, $email, $hashed_password]);
        $_SESSION['user_id'] = $pdo->lastInsertId();
        header('Location: dashboard.html');
        exit();
    } catch (PDOException $e) {
        // Handle duplicate entries or other errors
        echo 'Registration failed: ' . $e->getMessage();
    }
}
?>
