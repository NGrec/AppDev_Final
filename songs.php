<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>

<link rel="stylesheet" href="./css/common.css">

</head>
<body>

<h1>Test song Table</h1>






<div style="margin-bottom:25px;">Go <a href="index.html">BACK</a> to first page.</div>
    
<?php

    echo "<table class='table-data'>";
    echo "<tr><th>ID</th><th>Title</th><th>Artist</th><th>Album</th><th>Image</th><th>Year</th>";

    $host = "jaydeninniss.com";    
    $db_name = "innis301_moodmusic";
    $username = "innis301_appdevs";
    $password = "UrMom666";

    // $host = "localhost";
    // $db_name = "moodmusic";
    // $username = "root";
    // $password = "root";

    try {
        // create the connection object using the credentials above
        $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);     

        // set client character set
        $conn->exec("SET NAMES utf8");

        // this will allow the connections to throw errors as exceptions (they are caught below)
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // the sql statement to execute
        $stmt = $conn->prepare("
            SELECT    
                songs.song_id, songs.title, songs.mood_id, songs.artist, songs.image, songs.year, moods.mood_id
            FROM songs 
            INNER JOIN moods ON songs.mood_id = moods.mood_id
                WHERE songs.mood_id=1


        ");    
        
        $stmt->execute();

        // this gets an associative array (ie the keys can be used as well as the indicies)
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        
            echo "<tr>";

            echo "<td>" . $row['song_id'] . "</td>";
            echo "<td>" . $row['title'] . "</td>";
            echo "<td>" . $row['artist'] . "</td>";
            echo "<td>" . $row['album'] . "</td>";
            echo "<td>" . $row['image'] . "</td>";
            echo "<td>" . $row['year'] . "</td>";
            echo "<td>" . $row['mood_id'] . "</td>";


            echo "</tr>";               
        }

    } 
    catch(PDOException $e) {
        // if the try block throws and error or exception it will run to here
        echo "Error: " . $e->getMessage();
    }
    
    $conn = null;
    echo "</table>";

   
?>

</body>
</html>