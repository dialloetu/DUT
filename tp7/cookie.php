<?php
echo var_dump($_SERVER);
if(isset($_COOKIE['osef'])){
  echo $_COOKIE['osef'];
}else{
  header('setCookie:"osef","ceci est un cookie",time()+60*60*2');
  echo "creation du cookie";
}

 ?>
