<?php
if(isset($_COOKIE['incr'])){
  $val=$_COOKIE['incr'];
  header('cookie:"incr",$val+1,time()+60*60*2');
  echo $val;


}else{
  setcookie('incr',0,time()+60*60);
}
echo var_dump($_SERVER);


 ?>
