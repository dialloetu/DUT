<?php

$user='root';
$pass='';

try {
  $dsn='mysql:host=localhost;dbname=Td9';
  $db=new PDO($dsn,$user,$pass,array(PDO::ATTR_PERSISTENT => true,
                                            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                                            PDO::ATTR_EMULATE_PREPARES => false,
                                            PDO::ATTR_STRINGIFY_FETCHES => false));
  $db->prepare('SET NAMES \'UTF8\'')->execute();
  $com=$db->prepare('select * from item;');
  $com->execute();
  while ($row=$com->fetch(PDO::FETCH_ASSOC)) {
    echo $row['id']."<br/>";
    echo $row['liste_id']."<br/>";
    echo $row['nom']."<br/>";
    echo $row['descr']."<br/>";
    echo $row['img']."<br/>";
    echo $row['url']."<br/>";
    echo $row['tarif']."<br/>";
  }

} catch (Exception $e) {
  echo $e->getMessage();
}




 ?>
