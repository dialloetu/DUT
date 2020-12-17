<?php
require 'Personne.php';
require 'AfficheurDePersonne.php';

$p=new Personne("Maurice");

print $p;
print "<br/>";
$p2=new Personne("Bernard");

print $p2->__toString();

$a=new AfficheurDePersonne(new Personne("Patrick"));
print $a->vueCourte();
print $a->vueDetail();
print $a->afficher("c");






?>
