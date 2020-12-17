<?php
	namespace analysePhonetique\controleur;
  use analysePhonetique\vue\Vue as Vue;
	  use analysePhonetique\modele\Modele as Modele;
class ControleurTraduction{
  public function __construct(){
}

public function traductionClassique(){
	  if(!empty($_GET)){
			$vue=new Vue(1, Modele::traduction($_GET['barre']));
		}else{
			$vue=new Vue(1);
		}
  $vue->render();

}

public function fonction2(){
  $vue=new Vue(2);
  $vue->render();

}
public function fonction3(){
  $vue=new Vue(3);
  $vue->render();

}
public function traductionInverse(){
	if(!empty($_GET)){
		$vue=new Vue(4, Modele::traductionInverse($_GET['barre']));
	}else{
		$vue=new Vue(4);
	}
$vue->render();
}
private function reponse(){

}



} ?>
