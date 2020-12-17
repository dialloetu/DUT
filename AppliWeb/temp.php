<?php
include 'src\modele\Modele.php';
 use analysePhonetique\modele\Modele as Modele;


$lines = file("src/modele/Dictionnaire_Francais.txt");
foreach($lines as $n => $line){
  $tab[Modele::trouverMot($line)]=Modele::trouverTrad($line);

}
$json = json_encode($tab);
echo var_dump($json);

$nom_du_fichier = 'Dictionnaire_Francais.json';

// Ouverture du fichier
$fichier = fopen($nom_du_fichier, 'w+');

// Ecriture dans le fichier
fwrite($fichier, $json);

// Fermeture du fichier
fclose($fichier);


 ?>
