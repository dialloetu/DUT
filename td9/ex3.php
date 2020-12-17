<?php
class ex3{
  static function liste(){
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
  }

  static function rechercheId($id){
    ConnexionFactory::makeConnection();
    try {
      ConnexionFactory::$db->prepare('SET NAMES \'UTF8\'')->execute();
      $com=ConnexionFactory::$db->prepare('select * from item where id= '.$id.';');
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
  }

  static function ajouterListe($descr,$exp,$num,$titre,$token,$userId){
    ConnexionFactory::makeConnection();
    try {
      $st=ConnexionFactory::$db->prepare("insert into liste values (?,?,?,?,?,?);");
      $st->bindParam(1,$desc);
      $st->bindParam(2,$exp);
      $st->bindParam(3,$num);
      $st->bindParam(4,$titre);
      $st->bindParam(5,$token);
      $st->bindParam(6,$userId);

      //$com=ConnexionFactory::$db->prepare("insert into liste value (".$descr.",".$exp.",".$num.",".$titre.",".$token.",".$userId.");");
      $st->execute();
    } catch (Exception $e) {
      echo $e.getMessage();
    }




  }
  static function suppListe($id){
      ConnexionFactory::makeConnection();
      try {
            $st=ConnexionFactory::$db->prepare("delete from liste where no=?;");
            $st->bindParam(1,$id);
            $st->execute();
      } catch (Exception $e) {
        echo $e.getMessage();
      }

  }

}
 ?>
