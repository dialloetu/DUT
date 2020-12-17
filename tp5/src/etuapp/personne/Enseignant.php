<?php

namespace etuapp\personne;
use \etuapp\personne\Personne;
class Enseignant extends Personne{
  protected $disc,$comp,$bur;

  function __construct($nom,$disc,$comp,$bur){
    parent::__construct($nom);
    $this->disc=$disc;
    $this->comp=$comp;
    $this->bur=$bur;

  }


}

 ?>
