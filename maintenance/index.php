<?php
header("Access-Control-Allow-Headers: content-type,x-access-key");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$response = ['meta' => []];
$response['meta']['code'] = 503;
$response['meta']['message'] = '<p>現在システムメンテナンス中のため</p><p>ご利用いただけません。</p>';
echo json_encode($response);



