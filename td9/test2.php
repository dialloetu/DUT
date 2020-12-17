<?php
require 'ConnexionFactory.php';
require 'ex3.php';
  ConnexionFactory::setConfig('connexion.ini');
  //ex3::liste();
  //ex3::rechercheId(2);
  //ex3::ajouterListe(4,1,"chaussette","C une chaussette","02/02/02","nosecure4");
  ex3::suppListe(4);
 ?>
