<?php
header("Content-Type: application/json; charset=UTF-8");
include __DIR__ . "/db_sqlsrv.php";

$sql = "SELECT movie_name, show_time, seats, total_price, payment_method, created_at
        FROM invoices
        ORDER BY created_at DESC";

$stmt = sqlsrv_query($conn, $sql);

$data = [];
while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    $row["created_at"] = $row["created_at"]->format("Y-m-d H:i:s");
    $data[] = $row;
}

echo json_encode($data, JSON_UNESCAPED_UNICODE);
