<?php
session_start();
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SESSION['user_id'])) {
    // Retrieve and sanitize input
    $blood_pressure = trim($_POST['blood_pressure']);
    $bmi            = trim($_POST['bmi']);
    $stress_level   = trim($_POST['stress_level']);

    // Insert health data into database
    $stmt = $pdo->prepare('INSERT INTO health_data (user_id, blood_pressure, bmi, stress_level, recorded_at) VALUES (?, ?, ?, ?, NOW())');
    try {
        $stmt->execute([$_SESSION['user_id'], $blood_pressure, $bmi, $stress_level]);
        echo 'Health data submitted successfully.';
    } catch (PDOException $e) {
        echo 'Data submission failed: ' . $e->getMessage();
    }
}
?>
