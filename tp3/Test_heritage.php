<?php
require_once '\personne\Etudiant.php';
//require_once '\personne\Personne.php';
require_once '\personne\Enseignant.php';
require_once '\afficheur\AfficheurEtudiant.php';
require_once '\afficheur\AfficheurEnseignant.php';
use \etuapp\personne\Etudiant;
use \etuapp\personne\Enseignant;
use \etuapp\afficheur\AfficheurEtudiant;
use \etuapp\afficheur\AfficheurEnseignant;

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
