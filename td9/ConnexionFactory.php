<?php
class ConnexionFactory{
  static $db;
  static $conn;
  public static function setConfig($file){
    self::$conn=parse_ini_file($file);
  }
  public static function makeConnection(){
      $dsn='mysql:host=localhost;dbname=Td9';
      self::$db=new PDO($dsn,'root','',array(self::$conn));
  }
}
 ?>
