<?php
$serverName = "LAPTOP-6VLATPME\\SQLEXPRESS";

$connectionOptions = [
    "Database" => "cinema_booking",
    "TrustServerCertificate" => true
];

$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}
