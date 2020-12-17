<?php
require_once 'Enseignant.php';
class AfficheurEnseignant{
  public $p;

  function __construct($p){
    $this->p=$p;
  }

  function vueCourte(){
    $pe=$this->p;
    return ("<div>$pe->nom , $pe->prenom , $pe->ville</div>");
  }

  function vueDetail(){
      $pe=$this->p;
      return ("<div>$pe->nom , $pe->prenom , $pe->ville,
                    $pe->age , $pe->adr , $pe->post,
                    $pe->tel , $pe->mail , $pe->skype,
                    $pe->disc,$pe->comp,$pe->bur </div>");

  }

  function afficher($sel){
    if($sel=="c"){
      return $this->vueCourte();

    }
    if($sel=="d"){
      return $this->vueDetail();

    }

}
}
 ?>
