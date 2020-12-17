<?php
require_once 'Etudiant.php';
require_once 'Personne.php';
require_once 'Enseignant.php';
require_once 'AfficheurEtudiant.php';
require_once 'AfficheurEnseignant.php';
require 'Groupe.php';

echo "<title>LE TD 4</title>";
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
echo $aen->afficher("c")."</br>";
echo $en->disc."</br>";
echo $en->comp."</br>";
echo $en->bur."</br>";

$tab=["$e"=>8];
echo $en->ageEleve($tab)."</br>";

foreach ($_GET as $var=>$val) {
 echo $e->conv($val)."</br>";
}

$e->ajouterNote("anglais",12);
$e->ajouterMultiple("allemand","12;8;9;17");
$e->ajouterMultiple("espagnol","12;3;12;10");
$e->modifierNote("espagnol",0,13);
echo "notes anglais:<br/>";
$e->afficherNote("anglais");
echo "notes allemand:<br/>";
$e->afficherNote("allemand");
echo "notes espagnol:<br/>";
$e->afficherNote("espagnol");

echo "<br/>";
echo "moyenne allemand".$e->moyenne("allemand")."</br>";
echo "moyenne anglais".$e->moyenne("anglais")."</br>";
echo "moyenne generale".$e->moyenneGenerale()."</br>";

$e2=new Etudiant("bernard",9,"info","B");
$e2->modifierNote("anglais",0,15);
$g=new Groupe(2,"groupeB","info");
$g->ajouterEtudiants($e);
$g->ajouterEtudiants($e2);
echo $g->moyenneMatiere("anglais");
echo var_dump($g->tabMoyGen("nom"));


 ?>
