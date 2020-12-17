<?php
require_once 'Etudiant.php';
require_once 'Personne.php';
require_once 'Enseignant.php';
require_once 'AfficheurEtudiant.php';
require_once 'AfficheurEnseignant.php';

$e=new Etudiant("Michel",6,"info","B");
echo $e;
$ae=new AfficheurEtudiant($e);
echo $ae->afficher("c");
echo $e->num;
echo $e->for;
echo $e->gr;

print "<br/>";

$en=new Enseignant("Patrick","info","osef","le meilleur");
echo $en;
$aen=new AfficheurEnseignant($en);
echo $aen->afficher("c");
echo $en->disc;
echo $en->comp;
echo $en->bur;

 ?>
