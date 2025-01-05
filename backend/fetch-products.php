<?php
header("Access-Control-Allow-Origin: *");  // Umožňuje prístup z akéhokoľvek zdroja
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");  // Umožňuje tieto HTTP metódy
header("Access-Control-Allow-Headers: Content-Type, Authorization");  // Umožňuje tieto hlavičky

header('Content-Type: application/json');

// Your database connection details
$servername = "localhost";
$username = "root";  // replace with your database username
$password = "";  // replace with your database password
$dbname = "ukf-eshop";  // replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}

// SQL query to fetch products
$sql = "SELECT product_id, title, description, price, quantity FROM products";
$result = $conn->query($sql);

// Check if there are products
if ($result->num_rows > 0) {
    $products = [];

    // Fetch data into an array
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }

    // Return the products as JSON
    echo json_encode($products);
} else {
    // If no products found, return an empty array
    echo json_encode([]);
}

// Close connection
$conn->close();
?>
