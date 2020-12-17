<?php
namespace analysePhonetique\modele;
class Modele{
private static $nomDico="src\modele\Dictionnaire_Francais.json";
public static function setDico($nom){
	self::$nomDico=$nom;
}


/*
*Trouve la partie traduction sur une ligne du fichier
*/
static function trouverTrad($ligne){
  $res="";
    $recherche=str_split($ligne);
    foreach ($recherche as $key => $value) {
        if(($value==" " || $value=="\t") && $recherche[$key+1]!=" "){
          $recherche=array_splice($recherche,$key);
          array_shift($recherche);
          while($recherche[count($recherche)-1]==" " or $recherche[count($recherche)-1]=="\t"){
            array_pop($recherche);
          }
          array_pop($recherche);
          return implode($recherche);
          }
    }

    return $res;
}

/*
*Trouve la partie mot sur une ligne du fichier
*/
static function trouverMot($ligne){
$res="";
  $recherche=str_split($ligne);
  foreach ($recherche as $key => $value) {
      if($value!=" " and $value!="\t"){
        $res=$res.$value;
      }else{
        return $res;
      }
  }
}

/*
*Traduit un mot fournis a travers un GET
*/
static function traduction($text){
		if(preg_match("#^[\s|\t]*$#",$text)){
			return "le champ est vide";
		}
	$json=file_get_contents(self::$nomDico);
	$tab=json_decode($json,true);
	$text=str_replace(" ","",$text);

	$expr="#^".$text."(\(*[1-9]*\)*)$#";
	$rep=array();
	foreach ($tab as $key => $value) {
		if(preg_match($expr,$key)){
			$rep[]=Modele::correspondance($value);
		}
	}
	$rep=array_unique($rep);
	$reponse="";
	if(sizeof($rep)==0){
		$reponse="Le mot n'existe pas dans le dictionnaire";
	}else{
		foreach ($rep as $key => $value) {
			$reponse.=$value."\n";
		}
	}

	return $reponse;

}


/*
*Traduit un mot phonetique fournis a travers un GET
*/
static function traductionInverse($text){
		if(preg_match("#^[\s|\t]*$#",$text)){

			return "le champ est vide";
		}
		$text=str_replace(" ","",$text);
    $text=Modele::correspondanceInverse($text);
		$json=file_get_contents(self::$nomDico);
		$tab=json_decode($json,true);
		$rep=array();
			foreach ($tab as $key => $value) {
			if(strcmp($text,str_replace(" ","",$tab[$key]))==0){
				if($key[strlen($key)-1]==")"){
					$key=str_replace(substr($key,-3),"",$key);
				}
				$rep[]=$key;
			}

		}
		$reponse="";
		if(sizeof($rep)==0){
			$reponse="Le mot n'existe pas dans le dictionnaire";
		}else{
			foreach ($rep as $key => $value) {
				$reponse.=$value."\n";
			}
		}
		return $reponse;

}



/*
*Transforme des lettres en symbole phonetiques
*/
    private static function correspondance($mot){
       $corr = parse_ini_file("correspondance.ini");

       $tab=explode(" ",$mot);

       foreach ($tab as $key => $value) {

         foreach ($corr as $key2 => $value2) {

           if ($value==$corr[$key2]) {

              $tab[$key]=$key2;
           }

         if($tab[$key]=="swa"){
               $tab[$key]="";
           }
         }
       }
			 $res=implode($tab);

       return $res;
     }

     /*
     *Transforme des lettres en symbole phonetiques
     */
        private static  function correspondanceInverse($mot){
            $corr = parse_ini_file("correspondance.ini");

						foreach ($corr as $key => $value) {

							$mot=str_replace($key,$value,$mot);


						}

						return $mot;

          }


}
 ?>
