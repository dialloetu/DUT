/**
//"(*********************************************************************)
//"(*                                                                   *)
//"(*                           Js                                      *)
//"(*                                                                   *)
//"(*     Projet : Td1(exo1)                                            *)
//"(*  Auteur : Diallo Mohamed                                          *)
//"(*                                                                   *)
//"(*                                  D.U.T informatique A.S 2017/2018 *)
//"(*                                  IUT Charlemagne                  *)
//"(*                                  Universite de Lorraine           *)
//"(*                                                                   *)
//"(*********************************************************************)
*/

'use strict'


// Les Fonctions basiques 

//Exercice 1 :
console.log(" ************** Exercice 1 ************ "); 

/* Ex1_1*/

function minimun(nb1,nb2) {
  if(nb1<nb2){
    return nb1;
  }else if(nb2<nb1){
    return nb2;
  }else{
    return nb1;
  }
}

//Programme de test
console.log("Q1-Min)");
console.log("Minimum entre 14 et 2 : ");
console.log(minimun(14,2));

let maximun=(nb1,nb2) => {
  if(nb1>nb2){
    return nb1;
  }else if(nb2>nb1){
    return nb2;
  }else{
    return nb1;
  }
}

//Programme de test
console.log("Q1-Max)");
console.log("Maximum entre 8 et 16 :");
console.log(maximun(8,16));

/* Ex1_2*/
function affiche(){
  for (var i = 1; i <= 100; i++) {
    var tmp = i;
    if(i%3==0){
      tmp+="woueee";
    }
    if(i%5==0){
    tmp+="yoooo";
    }
    if(i==73){
      tmp+="Biinnngooo";
    }
    console.log(tmp);
  }
}

//Programme de test
console.log("Q2)");
console.log("Fonction Affiche");
affiche();



/* Ex1_3*/
function power(x,n){
  var tmp=x;
  //boucle for
  for (var i = 1; i < n; i++) {
    tmp*=x;
  }
  console.log(tmp);
}

//Programme de test
console.log("Q3)");
console.log("Fonction puissance : 2^4");
power(2,4);


/* Ex1_4*/
function powerRecursif(x,n){
  var tmp
  if(n==0){
    return 1;
  }else{
    tmp = x*powerRecursif(x,n-1)
  }
  return tmp;
}

//Programme de test
console.log("Q4)");
console.log("Fonction puissance recursive : 2^4");
console.log(powerRecursif(2,4));
