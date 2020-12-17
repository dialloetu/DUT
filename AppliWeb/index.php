<?php
require 'vendor/autoload.php';
use analysePhonetique\controleur\ControleurTraduction as ControleurTraduction;
$app = new \Slim\Slim();

	$app->get('/',function(){
	  $controler= new ControleurTraduction();
		$controler->traductionClassique();

	});

  $app->get('/traduction',function(){
    $controler= new ControleurTraduction();
   $controler->traductionClassique();
	});
	$app->get('/traductionInverse',function(){
    $controler= new ControleurTraduction();
   $controler->traductionInverse();
	});
  $app->get('/fonction2',function(){
    $controler= new ControleurTraduction();
   $controler->fonction2();
  });
  $app->get('/fonction3',function(){
    $controler= new ControleurTraduction();
   $controler->fonction3();
  });

  $app->run();

?>
