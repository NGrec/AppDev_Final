<?php
// Required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Include database and object files
include_once '../config/database.php';
include_once '../objects/song.php';

// Instantiate database and song object
$database = new Database();
$db = $database->getConnection();
$song = new Song($db);

// Sanitize query parameters
$_GET = filter_input_array(INPUT_GET, FILTER_SANITIZE_STRING);

// Get the optional ID parameter
$id_param = isset($_GET["id"]) ? strtolower(trim($_GET["id"])) : "";

// Execute the query
$stmt = $song->read($id_param); // Ensure `read()` method supports filtering by $id_param
$num = $stmt->rowCount();

// Prepare the response
if ($num > 0) {
    // Songs array
    $song_arr = [
        "count" => $num,
        "songs" => []
    ];

    // Fetch songs
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row); // Extracts array keys as variables
        $song_item = [
            "song_id" => $song_id,
            "title" => $title,
            "mood_name" => $mood_name
        ];
        $song_arr["songs"][] = $song_item;
    }

    // Set response code - 200 OK
    http_response_code(200);
    echo json_encode($song_arr);

} else {
    // Set response code - 404 Not Found
    http_response_code(404);
    echo json_encode([
        "count" => 0,
        "songs" => [],
        "message" => "No songs found."
    ]);
}
?>