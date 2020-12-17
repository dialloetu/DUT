<?php
require_once 'Personne.php';
class Etudiant extends Personne{
  protected $num,$for,$gr;

  function __construct($nom,$num,$for,$gr){
    parent::__construct($nom);
    $this->num=$num;
    $this->for=$for;
    $this->gr=$gr;
  }



}

 ?>
