<?php 

class Song {
    private $conn;      
    private $filter = "songs.mood_id > 0";  

    public function __construct($db) {
        $this->conn = $db;
    } 

    function read($id_param = null) {
        // Evaluate the filter condition
        $this->filter = $this->evalFilterTerm($id_param);    

        // Select query with a join
        $query = "
          SELECT    
              songs.song_id, songs.title, songs.mood_id, songs.artist, songs.image, songs.year, 
              moods.mood_name, moods.slug
          FROM songs 
          INNER JOIN moods ON songs.mood_id = moods.mood_id
          WHERE $this->filter
        ";

        $stmt = $this->conn->prepare($query);

        try {
            // Bind parameters if $id_param is provided
            if ($id_param !== null && $id_param !== '') {
                $stmt->bindValue(':id', $id_param, PDO::PARAM_INT);
            }

            // Execute query
            $stmt->execute();
            return $stmt;

        } catch (PDOException $e) {
            // Log the error
            error_log("Database query error: " . $e->getMessage());
            return false;
        }   
    } 
    
    /******** UTILITY METHODS *********/
    function evalFilterTerm($term) {                
        if ($term !== null && is_numeric($term) && $term > 0) {
            return "songs.mood_id = :id";
        }
        // Default filter
        return "songs.mood_id > 0";
    }
}

?>