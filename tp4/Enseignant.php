<?php
require_once 'Personne.php';
class Enseignant extends Personne{
  protected $disc,$comp,$bur;

  function __construct($nom,$disc,$comp,$bur){
    parent::__construct($nom);
    $this->disc=$disc;
    $this->comp=$comp;
    $this->bur=$bur;

  }

function ageEleve($tab){
  $c=0;
  foreach($tab as $val){
    $c+=$val;
  }
  return $c;
}



}

 ?>
