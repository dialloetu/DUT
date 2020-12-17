<?php
namespace etuapp\test;

use \etuapp\personne\Personne;
use \etuapp\afficheur\AfficheurDePersonne;
$p=new Personne("Maurice");
$p->prenom="michel";
print $p;
print "<br/>";
$p2=new Personne("Bernard");

print $p2->__toString();

$a=new AfficheurDePersonne(new Personne("Patrick"));
print $a->vueCourte();
print $a->vueDetail();
print $a->afficher("c");






?>
