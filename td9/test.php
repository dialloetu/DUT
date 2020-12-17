<?php
require 'ConnexionFactory.php';
ConnexionFactory::setConfig('connexion.ini');
ConnexionFactory::makeConnection();
try {
  ConnexionFactory::$db->prepare('SET NAMES \'UTF8\'')->execute();
  $com=ConnexionFactory::$db->prepare('select * from item;');
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
  echo $e.getMessage();
}


 ?>
