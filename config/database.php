<?php
class Database{
  
    // credentials for jaydens live database 
    private $host = "jaydeninniss.com";
    private $db_name = "innis301_moodmusic";
    private $username = "innis301_appdevs";
    private $password = "UrMom666";
    

    // private $host = "localhost";
    // private $db_name = "moodmusic";
    // private $username = "root";
    // private $password = "root";

    public $conn;  

    // get the database connection
    public function getConnection(){
  
        $this->conn = null;
  
        try{
            $this->conn = new PDO("mysql:host=$this->host;dbname=$this->db_name", $this->username, $this->password);
            $this->conn->exec("SET NAMES utf8");
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);            

        }
        catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
  
        return $this->conn;
    }
}
?>