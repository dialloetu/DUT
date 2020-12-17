<?php
class Personne{
public $nom,$prenom,$age,$ville,$adr,$post,$mail,$tel,$skype;

function __construct($nom){
  $this->nom=$nom;

}

function __toString(){
  return (" { \" nom: \" $this->nom ,\" prenom: \"  $this->prenom ,\" age: \"  $this->age ,
    \" ville: \"  $this->ville ,\" adresse: \"  $this->adr ,\" code postal: \"  $this->post ,
    \" e-mail: \"  $this->mail ,\" telephone: \"  $this->tel ,\" skype: \"  $this->skype }");
}
}
