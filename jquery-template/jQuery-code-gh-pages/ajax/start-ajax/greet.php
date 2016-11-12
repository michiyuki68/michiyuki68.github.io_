<?php

$res = [
    "message" => htmlspecialchars("hi!" . $_GET['name'], ENT_QUOTES, "utf-8"),
    "length" => strlen($_GET['name'])
];

// jsonで送信
header('Content-Type: application/json; charset=utf-8');
echo json_encode($res);
