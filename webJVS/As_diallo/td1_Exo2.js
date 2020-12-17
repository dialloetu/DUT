/**
//"(*********************************************************************)
//"(*                                                                   *)
//"(*                           Js                                      *)
//"(*                                                                   *)
//"(*     Projet : Td2(exo2)                                            *)
//"(*  Auteur : Diallo Mohamed                                          *)
//"(*                                                                   *)
//"(*                                  D.U.T informatique A.S 2017/2018 *)
//"(*                                  IUT Charlemagne                  *)
//"(*                                  Universite de Lorraine           *)
//"(*                                                                   *)
//"(*********************************************************************)
*/

'use strict'

// Les Fonctions avancées : closures et fonctions retournées

//Exercice 2 : 
console.log(" ************** Exercice 2 ************ ");

/* Ex2_1*/
function creerMultiplicateur(n){
  return (x) => {
	  return x*n;
	  }
}

//Programme de test
console.log("Q1)");
var test1 = creerMultiplicateur(9);
console.log(' Multiplicateur de 9 avec le chiffre 4');
console.log(test1(4));

/* Ex2_2*/
function creerSequence(init, step){
  return () => {
	  return init+=step;
	  }
}

//Programme de test
console.log("Q2)");
var test2 =creerSequence(2,4);
console.log("Sequence qui commence par 2 et est incrémenté de 4");
for (var i = 0; i < 10; i++) {
  console.log(test2());
}

/* Ex2_3*/
function fibonacci(c1,c2){

  return ()=>{
    var res=c1+c2;
    c1=c2;
    c2=res;

    return res;
  }
}

//Programme de test
console.log("Q3)");
var f=fibonacci(1,1);
console.log("Parcours de la Suite de fibonacci commençant par 1 et 1");
for (var i = 0; i < 5; i++) {
  console.log(f());
}


/* Ex2_4*/
function ModifCreerMultiplicateur(n,x) {
	//un parametre
  if(arguments.length ==1){
      return (x) => {
		  return x*n;
		  }
	// deux arguments
  }else if(arguments.length ==2){
    return n*x;
	}
}

//Programmes de test
console.log("Q4)");
console.log('Un argument ex: multiplcateur de 4 avec le chiffre  6');
var test4 = ModifCreerMultiplicateur(4);
console.log(test4(6));
console.log('Avec 2 argument ex: multiplication de 4 et 7');
console.log(ModifCreerMultiplicateur(4,7));

/* Ex2_5*/
function ModifPower(n,x){
	//un argument
  if(arguments.length==1){
    return (a) => {
      var tmp
      if(n==0){
        return 1;
      }else{
        tmp=a*ModifPower(n-1,a)
      }
      return tmp;
    }
  }else if(arguments.length==2){  // Deux arguments
    var tmp
    if(n==0){
      return 1;
    }else{
      tmp=x*ModifPower(n-1,x)
    }
    return tmp;
  }
}

//Programmes de test
console.log("Q5)");
console.log("Puissance avec Un argument : n=5 et chiffre 3, donc 3 puissance 5");
var testPow=ModifPower(5);
console.log(testPow(3));
console.log("Puissance avec 2 arguments ex: n=3 et x=4, donc 4 puissance 3");
console.log(ModifPower(3,4));


/* Ex2_6*/
function formatter(n) {
  let i=n
  return (message)=>{
    i++;
    return i-1+': '+message;
  }
}

//Programmes de test
console.log("Q6)");
console.log('fonction formatter un message a partir du numero 10');
var format = formatter(10);
console.log(format('le ciel est blanc'));
console.log(format('la neige est bleue'));


/* Ex2_7*/
function write(message) {
  console.log(message);
}

function writeAlert(messageA) {
  write(messageA);
}

//Programmes de test
console.log("Q7)");
console.log("test de la fonction write()");
write("message");
console.log("test fonction writeAlert()");
writeAlert("messageAlert");

/* Ex2_8*/
function logger(formattage,ecritureMessage){
  return (message)=>{
    console.log('le message a été ecrit avec la fonction '+formattage+' et la fonction '+ecritureMessage);
    ecritureMessage(formattage(message));
  }
}

//Programmes de test
console.log("Q8)");
console.log("Fonction de formattage et d'ecriture qui ecrit dans la console");
var logConsole = logger(formatter(10),write);
logConsole("test de la fonction qui permet de logger en format plus ecriture de message");
