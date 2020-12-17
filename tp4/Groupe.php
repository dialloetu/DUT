<?php
require_once 'Etudiant.php';

class Groupe{
  protected $sem,$groupe,$form,$etudiants;
  function __construct($s,$g,$f){
    $this->sem=$s;
    $this->groupe=$g;
    $this->form=$f;

  }

  function ajouterEtudiants($etudiant){
    $this->etudiants[]=$etudiant;

  }

  function moyenneMatiere($matiere){
    $c=0;
    $s=0;
    foreach ($this->etudiants as $key => $value) {
      $c++;
      $s+=$value->moyenne($matiere);

    }
    return $s/$c;
  }

  function tabMoyGen($choix){
    $res;
    foreach ($this->etudiants as $key => $value) {
      $res[$value->nom]=$value->moyenneGenerale();
    }

if($choix=="nom"){
  krsort($res);
}
if($choix=="moyenne"){
  arsort($res);
}

     return $res;
  }
}
