<?php
session_start();
require 'config.php';

if (!isset($_SESSION['user_id'])) {
    header('Location: login.html');
    exit();
}

// Fetch user-specific health data
$stmt = $pdo->prepare('SELECT * FROM health_data WHERE user_id = ? ORDER BY recorded_at DESC');
$stmt->execute([$_SESSION['user_id']]);
$healthData = $stmt->fetchAll();

// Return data as JSON
header('Content-Type: application/json');
echo json_encode($healthData);
?>
