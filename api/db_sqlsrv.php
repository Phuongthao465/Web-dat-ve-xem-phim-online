<?php
$serverName = "LAPTOP-6VLATPME\\SQLEXPRESS";

$connectionOptions = [
    "Database" => "cinema_booking",
    "TrustServerCertificate" => true,
    "CharacterSet" => "UTF-8"
];

$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn === false) {
    http_response_code(500);
    echo json_encode(sqlsrv_errors(), JSON_UNESCAPED_UNICODE);
    exit;
}
