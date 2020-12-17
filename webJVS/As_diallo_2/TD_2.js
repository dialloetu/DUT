/* TD 2 */

/*exo1*/
function tabOjet(tableau){
	return {
		"nbrElement":tableau.length, /*nombre des elements */
		"somme":sum(tableau), /*somme des elements, fonction deja defini*/
		"moyenne":moy(tableau) /*moyenne des elements fonction deja defini*/
	}
}

/* fonction principale */
tableau_ex =[1,2,3]
console.log("tableau d'entier ");
console.log(tabOjet(tableau_ex));

/*exo2*/

var objet_etudiant = {
  "numero":2,
  "nom":"Diallo",
  "prenom":"Mohamed",
  "dateNaiss": new Date(2018,3,),
  "mail":"diallo@gmail.com",
  "notes":[], /*tableau vide*/
  
	/* ajout de la methode calculer age dedans */
  calculerAge() {
    var annee = new Date().getFullYear(); /* le FullYear me renvoie l'annee en 4 chiffres  */
    var anneeNaissance = this.dateNaiss.getFullYear();
    return annee - anneeNaissance ; // renvoi le l'age calculer 
	},
	/*ajout de la methode d'affichage */
    affichage() {
    valRes='';
 /*concat */ res += "Prenom: "+this.prenom+", NOM: "+this.nom.toUpperCase()+", Date de naissance: ";
 /*concat */ res += this.dateNaiss.getMonth()+"/"+this.dateNaiss.getDay()+"/"+this.dateNaiss.getFullYear();
    return res;
	}
	
  
}