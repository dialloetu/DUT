<?php
	namespace analysePhonetique\vue;

class Vue{
  private $select;
  private $contenu;
public function __construct($sel,$c=""){
  $this->select=$sel;
	$this->contenu=$c;
}

private function clavier(){
	if($this->select==4){
	return '    <div id="clavier">
  </div><script>function press(symbole){
    document.getElementById("barre").value+=symbole;

  }
  tab=["b","d","f","ɡ","k","l","m","n","ŋ","ɲ","p","ʁ","s","ʃ","t","v",
       "z","ʒ","j","w","ɥ","a","ɑ","e","ɛ","ɛː","ə","i","œ","ø","o","ɔ",
       "u","y","ɑ̃","ɛ̃","œ̃","ɔ̃","ˈ",".","‿"];


  for (var i = 0; i < tab.length; i++) {
		var b=document.createElement("input");
		b.type="button";
		b.value=tab[i];
		b.id="boutonClavier";
		b.setAttribute("onClick","press(\""+tab[i]+"\")") ;


    document.getElementById("clavier").appendChild(b);
  }

  </script>';
}
}
  public function render(){
    $this->afficher($this->select);
  }
private function header(){
	$app = \Slim\Slim::getInstance();
      $rootUri = $app->request->getRootUri();
      $urlCss = $rootUri."/style.css";
  return "
<head>
<meta charset='unicode'>
<link rel=\"stylesheet\" href=\"$urlCss\" />
<title>Analyse phonetique</title>
<form>
<select name=\"Fontionnalités\"  onChange=\"location = this.options[this.selectedIndex].value;\">
<option value=\"#\">Choisissez la Fonctionnalité à utiliser</option>
<option value=\"traduction\">Traduction classique</option>
<option value=\"fonction2\">Fonctionnalité 2 WIP</option>
<option value=\"fonction3\">Fonctionnalité 3 WIP</option>
</select>
</form>
  </head>";
}

private function affichageTraduction(){
	$app = \Slim\Slim::getInstance();
      $rootUri = $app->request->getRootUri();

	return '<body>
	  <form name="form" id="traduction" action="" method="get">
	    <textarea type="text" id="barre" name="barre"  placeholder="Entrez un mot a traduire" autocomplete="on"></textarea>
	    <input type="submit" name="bouton" id="bouton"value="chercher"/>
			<a  href="'.$rootUri.'/traductionInverse"><input type="button" name="bouton" id="bouton" value="inverser"></a>
			<textarea id="zoneTraduction" readonly=true placeholder="la traduction apparaitra ici">';
}

private function affichageTraductionInverse(){
	return '

	<body>

	<form name="form" id="traduction" action="" method="get">
	<textarea type="text" id="barre" name="barre"  placeholder="Entrez une traduction" autocomplete="on"></textarea>
	<input type="submit" id="bouton"value="chercher"/>
	<a  href="traduction"><input type="button" id="bouton" value="inverser"></input></a>
	<textarea id="zoneTraduction" readonly=true placeholder="le mot apparaitra ici">';
}


  private function afficher($choix){
    $contenu="";
    switch ($choix) {
      case '1':
        $contenu = $this->affichageTraduction();
        break;
			case '2':
			$contenu="fonction 2";
			break;
			case '3':
			$contenu="fonction 3";
			break;
			case '4':
			$contenu = $this->affichageTraductionInverse();
				break;

    }
    $html = "<html>".$this->header().$contenu.$this->contenu."</textarea>
  </form>".$this->clavier()."</body>"."</html>";

    echo $html;
  }


} ?>
