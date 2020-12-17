<?php

class Autoload{
public $prefixe,$chemin;
function __construct($prefixe,$chemin){
  $this->prefixe=$prefixe;
  $this->chemin=$chemin;
}

function loadclass($classname){
  $s=$this->chemin."\\".$classname.".php";
  $s=str_ireplace("\\",DIRECTORY_SEPARATOR,$s);
  if(is_file($s)){
    require $s;
  }

}


function register(){
  spl_autoload_register([$this,"loadclass"]);
}

}
