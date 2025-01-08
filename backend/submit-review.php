<?php
require_once 'db_connect.php';

$data = json_decode(file_get_contents("php://input"), true);

// Log the received input to a file for debugging
file_put_contents('review_log.txt', print_r($data, true));

try {
    if (!isset($data['choice'], $data['rating'], $data['comment'])) {
        echo json_encode(["error" => "Invalid input"]);
        exit;
    }

    $stmt = $pdo->prepare("INSERT INTO reviews (user_id, countryid, rating, review) VALUES (:user_id, :countryid, :rating, :review)");
    $stmt->execute([
        ':user_id' => 1, // Replace 1 with dynamic user ID if needed
        ':countryid' => $data['choice'],
        ':rating' => $data['rating'],
        ':review' => $data['comment']
    ]);

    echo json_encode(["success" => "Review submitted successfully"]);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Query failed: ' . $e->getMessage()]);
}

?>
