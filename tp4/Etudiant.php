<?php
require_once 'Personne.php';
class Etudiant extends Personne{
  protected $num,$for,$gr,$note;

  function __construct($nom,$num,$for,$gr){
    parent::__construct($nom);
    $this->num=$num;
    $this->for=$for;
    $this->gr=$gr;
  }

function conv($j){
  $tab =[1=>"Lundi",2=>"Mardi",3=>"Mercredi",4=>"Jeudi",5=>"Vendredi",6=>"Samedi",7=>"Dimanche"];
  return $tab[$j];
}

function ajouterNote($matiere,$note){
  $this->note["$matiere"][]=$note;
}

function moyenne($matiere){
  $c=0;
  $s=0;
  $tab=$this->note;


    foreach($tab[$matiere] as $val){
      $s+=$val;
      $c+=1;
    }
    $moyenne=$s/$c;
    return $moyenne;

}

function modifierNote($matiere,$num,$note){
    $this->note[$matiere][$num]=$note;

}
function ajouterMultiple($matiere,$note){
  $tab=explode(";",$note);
  foreach($tab as $val){
    $this->ajouterNote($matiere,$val);
  }
}

function moyenneGenerale(){
  $c=0;
  $t=$this->note;
  foreach ($this->note as $key => $value) {

    $c+=$this->moyenne($key);
  }
  return $c/(count($t));
}

function afficherNote($matiere){
$tab=$this->note;
$tab2=$tab[$matiere];
foreach ($tab2 as $key => $value) {
  echo $value."<br/>";
}
}
}

 ?>
