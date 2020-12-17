/**
//(*********************************************************************)
//(*                                                                   *)
//(*                           Js                                      *)
//(*                                                                   *)
//(*     Projet : Td2(exo2)                                            *)
//(*  Auteur : Diallo Mohamed                                          *)
//(*                                                                   *)
//(*                                  D.U.T informatique A.S 2017/2018 *)
//(*                                  IUT Charlemagne                  *)
//(*                                  Universite de Lorraine           *)
//(*                                                                   *)
//(*********************************************************************)
*/

'use strict'

// TD n°2 : tableaux

//Exercice 1 : 
console.log(" ************** Exercice 1 - Td 2 : tableaux ************ ");


/* Ex1_1*/
function range(a,b){
  var output=[];
  if(a<=b){
    for(var i = a; i <=b; i++) {
      output.push(i);
    }
  } else {
    for(var i = a; i >=b; i--) {
      output.push(i);
    }
  }
  return output;
}

//Programme de test
console.log("Q1 : fonction rang(a,b) ");
console.log("Q1 : a <= b ");
console.log("Fonction range, retourne un tableau contenant tous les entiers de 9 a 29 :  9 <= 29 ");
console.log(range(9,29));
console.log("Q1 : a > b ");
console.log("Fonction range, retourne un tableau contenant tous les entiers de 29 a 9 :  29 > 9 ");
console.log(range(29,9));


/* Ex1_2*/
function sum(tabEntier){
  var somme=0;
  var i = 0;
  while(i < tabEntier.length) {
    somme+=tabEntier[i];
    i++;
  }
  return somme;
}

function sum_For(tabEntier){
  var somme=0;
  for (var i = 0; i < tabEntier.length; i++) {
    somme+=tabEntier[i];
  }
  return somme;
}

function sum_ForEach(tabEntier){
  var somme=0;
  tabEntier.forEach((n)=>{
	  somme+=n;
  });
  return somme;
}

function sum_Reduce(tabEntier){
  let somme = (a,e) => a+e;
  return tabEntier.reduce(somme,0);
}

//Programme de test
console.log("Q2 : fonction somme(tableauEntier) ");
var tableauEntier = [1,2,3,4,5,6,7,8,9];
console.log("somme des elements du tableau d'entier :");
console.log(sum(tableauEntier));
console.log("somme des elements du tableau d'entier avec la boucle for() ");
console.log(sum_For(tableauEntier));
console.log("somme des elements du tableau d'entier avec forEach() ");
console.log(sum_ForEach(tableauEntier));
console.log("somme des elements du tableau d'entier avec reduce() ");
console.log(sum_Reduce(tableauEntier));

/* Ex1_3*/
function moyenne(tabEntier){
  return sum(tabEntier)/tabEntier.length;
}

function moyenne_for(tabEntier){
  return sum_For(tabEntier)/tabEntier.length;
}

function moyenne_ForEach(tabEntier){
  return sum_ForEach(tabEntier)/tabEntier.length;
}

function moyenne_Reduce(tabEntier){
  return sum_Reduce(tabEntier)/tabEntier.length;
}

//Programme de test
console.log("Q3 : fonction moyenne(tableauEntier) ");
var tableauEntier_ = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log("moyenne des elements du tableau d'entier :");
console.log(moyenne(tableauEntier_));
console.log("moyenne des elements du tableau d'entier avec la boucle for() ");
console.log(moyenne_for(tableauEntier_));
console.log("moyenne des elements du tableau d'entier avec forEach() ");
console.log(moyenne_ForEach(tableauEntier_));
console.log("moyenne des elements du tableau d'entier avec reduce() ");
console.log(moyenne_Reduce(tableauEntier_));

/* Ex1_4*/
function recup_motif(strings,pattern){
  var output=[];
  for(var i = 0; i < strings.length; i++) {
    if(strings[i].includes(pattern.toLowerCase())){
      output.push(strings[i].toUpperCase());
    }
  }
    return output;
}

//Programme de test
console.log("Q4 : fonction qui retourne en Maj, le motif pattern inclus dans strings ");
var tableau = ["europe","pays","euros"]; 
console.log("retourne le tab compose des chaines de strings, comportant le motif pattern en Maj");
console.log(tableau);
console.log(recup_motif(tableau,'eu'));


/* Ex1_5*/
function recup_motif_FilterMap(strings,pattern){
  let filt =(v)=>v.includes(pattern.toLowerCase());
  let mp =(v1)=>v1.toUpperCase();
  return strings.filter(filt).map(mp);
}

//Programme de test
console.log("Q5 : ré-écriture de la fonction précédente en utilisant filter() et  map() ");
var tableau_chaine = ["molad","ambition","creation"];
console.log("retourne le tab compose des chaines de strings, comportant le motif pattern en Maj, avec filter() et map() : 'AD' ");
console.log(tableau_chaine);
console.log(recup_motif_FilterMap(tableau_chaine,'ad'));

/* Ex1_6*/
function recup_generalise(strings,testFnct,transFnct){
  return strings.filter(testFnct).map(transFnct);
}

function recup_re_ecris(tableau){
  let fil = (v)=>v.includes(pattern.toLowerCase());
  let mp =(v1)=>v1.toUpperCase();
  return recup_generalise(fil,mp);
}

//Programme de test
console.log("Q6 : Utilisation de la fonction généralisée, pour ré-écrire le fonction précédente");
var tableau_chaine = ["molad","ambition","creation"];
console.log("retourne le tab compose des chaines de strings, comportant le motif pattern en Maj, avec la fn generalisee : 'AD'");
console.log(tableau_chaine);
console.log(recup_motif_FilterMap(tableau_chaine,'ad'));
console.log(" ****** Fin de l'exercice 1 ****** ");

console.log(" ");

// TD n°2 : objets

//Exercice 2 : 
console.log(" ************** Exercice 2 - Td 2 : Objets ************ ");

/* Ex2_1*/
function proprieteObjet(tabEntier){
  return {
	  "Nombre d'element":tabEntier.length,
	  "somme":sum_For(tabEntier),
	  "moyenne":moyenne_for(tabEntier)}
}

//Programme de test
console.log("Q1 : fonction qui retourne le nbre d'element, la somme et la moyenne des elements : ");
var tableauEntier = [1,2,3,4,5,6,7,8,9];
console.log("creation d'objet a partir d'un tableau ");
console.log(proprieteObjet(tableauEntier));

/* Ex2_2_3_4_5*/
var objet_etudiant={
	
  "numero":189,
  "nom":"diallo",
  "prenom":"mohamed",
  "dateNaiss":new Date(1998,9,9),
  "mail":"diallo.moahmed@gmail.com",
  "notes":[],

  calculerAge_etudiant() {
    var annee_actuelle=new Date().getFullYear();
    var annee_naissance=this.dateNaiss.getFullYear();
    return annee_actuelle-annee_naissance;
	},
	
  ajouterNote_etudiant(m,n) {
	var objet={
		"matiere":m,
		"note":n
		};
	this.notes.push(objet);
	},

   moyenne_etudiant() {
    tableau=[];
    for(var i = 0; i < this.notes.length; i++) {
      tableau.push(this.notes[i].note)
    }
    return moyenne_ForEach(tableau);
	},
	
  //methode complementaire de toutes les infos
   affichage_info_etudiant(){
    var output='';
    var prenom_nom="Prenom etudiant: "+this.prenom+", Nom etudanit: "+this.nom.toUpperCase()+", Date de naissance: ";
    var date_naiss=this.dateNaiss.getDay()+"/"+this.dateNaiss.getMonth()+"/"+this.dateNaiss.getFullYear(); // format preciser dd/mm/yyyy
	output=prenom_nom+date_naiss;
    return output;
	}
	
};

//Programme de test
console.log("Q2_2_3_4_5 : fonctions de definition litterale, calculAge, ajouteNote, moyenne, affichage_info ");
console.log("Q2_2 : fonctions de definition litterale, affichage_info ");
console.log(objet_etudiant);
console.log("Q2_3 : fonctions qui donne l'age de l'etudiant ");
console.log(objet_etudiant.calculerAge_etudiant());
console.log("Q2_4 : fonctions qui une note dans une matiere a l'etudiant ");
objet_etudiant.ajouterNote_etudiant("JavaScript",20);
objet_etudiant.ajouterNote_etudiant("Probailite",15);
objet_etudiant.ajouterNote_etudiant("Conception OOP",20);
console.log(objet_etudiant.notes);
console.log("Q2_5 : fonctions qui donne la moyenne de l'etudiant ");
console.log(objet_etudiant.moyenne_etudiant());
console.log("affiche les informations de l'etudiant, avec sa date de naiss au format indique :");
console.log(objet_etudiant.affichage_info_etudiant());

/* Ex2_6*/
function constructeurEtudiant(numero,nom,prenom,jourNaissance,moisNaissance,anneeNaissance,mail) {
    this.numero=numero;
    this.nom=nom;
    this.prenom=prenom;
    this.dateNaiss=new Date(anneeNaissance,moisNaissance,jourNaissance);
    this.mail=mail;
    this.notes=[];

    this.calculerAge_etudiant=function(){
      var anneeActu=new Date().getFullYear();
      var annee_Naiss=this.dateNaiss.getFullYear();
      return anneeActu-anneeNaissance;
    }
	
	this.ajouterNote_etudiant=function(m,n){
		  var objet={"matiere":m,"note":n};
		  this.notes.push(objet);
		}
		
	this.moyenne_etudiant=function(){
      tableau=[];
      for (var i = 0; i < this.notes.length; i++) {
        tableau.push(this.notes[i].note)
      }
      return moyenne_for(tableau);
    }
	
    this.affichage_info_etudiant=function(){
      var output='';
	  var prenom_nom="Prenom etudiant: "+this.prenom+", Nom etudanit: "+this.nom.toUpperCase()+", Date de naissance: ";
      var date_naiss=this.dateNaiss.getDay()+"/"+this.dateNaiss.getMonth()+"/"+this.dateNaiss.getFullYear(); // format preciser dd/mm/yyyy
	  output=prenom_nom+date_naiss;
      return output;
    }
    
}

//Programme de test
console.log("Q2_6 : constructeur d'etudiant avec les fonctions ci-dessus redefinies dans le prototype ");
console.log("Creation d'etudiant avec l'aide du constructeur etudiant ");
var etudiant=new constructeurEtudiant(15,"Ollaid","Jacque",20,5,1995,"jack_ollaid@gmail.com");
console.log(etudiant);

/* Ex2_7*/
function anniversaire_etudiant(tabEtudiants,num_mois){
  var output=[];
  for (var i = 0; i < tabEtudiants.length; i++) {
    if(tabEtudiants[i].dateNaiss.getMonth()==num_mois){
      output.push(tabEtudiants[i]);
    }
  }
  return output;
}

//Programme de test
console.log("Q2_7 : fonction qui retourne un tableau d'etudiant, dont le mois d'aniv est donne en param ");
console.log("Les etudiants dont l'anniversaire est en Septembre ");
console.log(anniversaire_etudiant([objet_etudiant,etudiant],9));

/* Ex2_8*/
function etudiantAgeDePlus(t_etudiants,age_param){
  var output=[];
  for (var i = 0; i < t_etudiants.length; i++) {
    if(t_etudiants[i].calculerAge_etudiant()>age_param){
      output.push(t_etudiants[i]);
    }
  }
  return output;
}

//Programme de test
console.log("Q2_8 : fonction qui renvoie les etudiants ayant plus d'un certains age, donne en param ");
console.log("Etudiants dont l'age est superieur a 16 ans");
console.log(etudiantAgeDePlus([objet_etudiant,etudiant],16));

/* Ex2_9*/
function objetGroupeEtudiant(nomgpe,formation,liste,annee){
  this.nomGroupe=nomgpe;
  this.formation=formation;
  this.liste=liste;
  this.annee=annee;
  
}

//Programme de test
console.log("Q2_9 : constructeur de groupe d'etudiant ");
var etudiantgpe=new objetGroupeEtudiant("dut_as","informatique",[],2018);
console.log(etudiantgpe);

/* Ex2_10*/
objetGroupeEtudiant.ajouterEtudiant=function(etudiant){
  liste.push(etudiant);
}

objetGroupeEtudiant.compterEtudiants=function(){
  return liste.length;
}

objetGroupeEtudiant.moyenneEtudiants=function(etudiant){
  let someme=[]
  for (var i = 0; i < liste.length; i++) {
    somme.push(liste[i].moyenne);
  }
  return somme;
}

objetGroupeEtudiant.moyenneGroupeMatiere=function(mat){
  let somme=0;
  let cpt=0;
  for (var i = 0; i < liste.length; i++) {
    for (var j = 0; j < liste[i].notes.length; j++) {
      if(liste[i].notes[j].matiere==mat){
        cpt++;
        somme+=liste[i].notes[j].note;
      }
    }
  }
  return somme/cpt;
}

/* Ex2_11*/
objetGroupeEtudiant.anniversaire_etudiant=function(mois,mat){
  for (var i = 0; i < liste.length; i++) {
    for (var j = 0; j < liste[i].notes.length; j++) {
      if(liste[i].notes[j].matiere==mat && liste[i].dateNaiss.getMonth()==mois){
        liste[i].notes[j].note+=2;
      }
    }
  }
}