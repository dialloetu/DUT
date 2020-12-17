<?php
/**
 *
 */
 //require 'Personne.php';
class AfficheurDePersonne
{
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
                    $pe->tel , $pe->mail , $pe->skype </div>");

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
