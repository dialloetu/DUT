<?php
require_once 'Etudiant.php';
class AfficheurEtudiant{
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
                    $pe->num,$pe->for,$pe->gr </div>");

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
