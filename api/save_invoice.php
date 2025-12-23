<?php
header("Content-Type: application/json; charset=UTF-8");
include __DIR__ . "/db_sqlsrv.php";

$data = json_decode(file_get_contents("php://input"), true);

// ✅ VALIDATE
$required = ["user_id", "movie_name", "show_time", "seats", "total_price", "payment_method"];

foreach ($required as $field) {
    if (!isset($data[$field]) || $data[$field] === "") {
        http_response_code(400);
        echo json_encode([
            "success" => false,
            "message" => "Thiếu dữ liệu: $field"
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }
}

// ✅ INSERT
$sql = "INSERT INTO invoices 
        (user_id, movie_name, show_time, seats, total_price, payment_method)
        VALUES (?, ?, ?, ?, ?, ?)";

$params = [
    $data["user_id"],
    $data["movie_name"],
    $data["show_time"],
    $data["seats"],
    $data["total_price"],
    $data["payment_method"]
];

$stmt = sqlsrv_query($conn, $sql, $params);

if ($stmt === false) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "errors" => sqlsrv_errors()
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode([
    "success" => true,
    "message" => "Lưu hóa đơn thành công"
], JSON_UNESCAPED_UNICODE);
