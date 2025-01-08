<?php
require_once 'db_connect.php';

try {
    $sql = "SELECT product_id, title, description, price, quantity FROM products";
    $stmt = $pdo->query($sql);

    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($products);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Query failed: ' . $e->getMessage()]);
}
?>
