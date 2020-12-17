/**
//"(*********************************************************************)
//"(*                                                                   *)
//"(*                           Js                                      *)
//"(*                                                                   *)
//"(*     Projet : Monster                                              *)
//"(*  Auteur : Diallo Mohamed                                          *)
//"(*                                                                   *)
//"(*                                  D.U.T informatique A.S 2017/2018 *)
//"(*                                  IUT Charlemagne                  *)
//"(*                                  Universite de Lorraine           *)
//"(*                                                                   *)
//"(*********************************************************************)
*/

'use strict'

//Exercice : the life 'n death a po' Monster
console.log(" ************** Exercice : the life 'n death a po' Monster ************ "); 
/* Etape 1 Q1 */
// déclaration sous forme littérale l'objet monster 
console.log(" *** Objet Monster *** "); 
let monster = {
  modules:{};
}

//création du module monster.modules.actions 
monster.modules.actions = (function(){

//* Etape 1 Q2-1 déclaration des variables decrivant l'état du monstre
    let name;
    let life;
    let money;
    let awake;
//Etape 1 Q2-2 fonction showme qui affiche les propriétés du monstre dans une alerte
    return {
        showme : function(){
			//Etape 2 Q3 fonction log et displayStatus
              //alert("nom du monstre = "+name+", point de vie = "+life+", argent = "+money+", réveillé ou non = "+awake);
            monster.modules.app.log(name);
            monster.modules.app.displayStatus(life, money, awake);
        },
		
//Etape 1 Q2-3 fonction initialise l'état du monstre avec les valeurs reçues en paramêtres	
        init : function(nom,vie,argent,reveille){
        name = nom;
        life = vie;
        money = argent;
        awake = reveille;
	
        monster.modules.app.displayStatus(life, money, awake);
        },
	//Etape 3 Q1 fonction log et displayStatus	
	  run : function(){
      if(awake && life>1){
        life = life - 1; // perte de 1 point de vie 
        monster.modules.app.log(name+" est entrain de courir ");
        monster.modules.app.displayStatus(life,money,awake);
      }
  },
	fight : function(){
      if(awake && life>3){
        life = life - 3; // perte de 3 points de vie
        monster.modules.app.log(name+" est entrain de se battre ");
        monster.modules.app.displayStatus(life, money, awake);
      }
  },
     work : function(){
    if(awake && life>1){
     life = life - 1; // perte de 1 point de vie 
      money = money + 2; // gain de 2 unités d'argent 
      monster.modules.app.log(name+" est entrain de travailler ");
      monster.modules.app.displayStatus(life, money, awake);
    }
  },
     eat : function(){
    if(awake && money>3){
     life = life + 2; // gain de 2 point de vie 
     money = money - 3; // perte de 3 unités d'argent 
      monster.modules.app.log(name+" est entrain de manger ");
        monster.modules.app.displayStatus(life,money,awake);
    }
  },
    //Etape 3 Q2 fonction dormir
    sleep : function(){
    monster.modules.app.log(name+" s'endort ");
    awake=false;
    monster.modules.app.displayStatus(life, money, awake);
    setTimeout(function(){
      monster.modules.app.log(name+" se réveille apès 10s ");
      life = life + 1;
      awake=true;
      monster.modules.app.displayStatus(life, money, awake);
    },10000);

  },
  
   //Etape 4 Q1 
  random : function(){
    if(awake && life>0){
    life = life - 1;
    let val_rand=Math.floor(Math.random()*Math.floor(5));

    switch(val_rand) {
      case 0:
            monster.modules.actions.eat();
            break;
      case 1:
            monster.modules.actions.run();
            break;
      case 2:
            monster.modules.actions.sleep();
            break;
      case 3:
            monster.modules.actions.fight();
            break;
      case 4:
            monster.modules.actions.work();
            break;

    }
  }
    monster.modules.app.displayStatus(life, money, awake);
  },
  
   //Etape 4 Q2
  kill : function(){
    if(awake){
    life=0;
    monster.modules.app.displayStatus(life, money, awake);
  }
  },
  newLife : function(){
    monster.modules.actions.init("Monster ", 30, 20, true);
    monster.modules.app.displayStatus(life,money,awake);
  }
}
})();

//Etape 1 Q3 création le module monster.modules.app 
monster.modules.app = (function(){
	//Etape 1 Q3-1 création le module monster.modules.app, les variables 
  let b1 = document.getElementById("b1");
  let b2 = document.getElementById("b2");
  let b3 = document.getElementById("b3");
  let b4 = document.getElementById("b4");
  let b5 = document.getElementById("b5");
  let b6 = document.getElementById("b6");
  let b7 = document.getElementById("b7");
  let kill = document.querySelector("#k");
  let statusLine =document.getElementById('status');
  let m=document.getElementById('monster');

 //Etape 1 Q3-2 fonction run 
  return {
    run : function(){
	 // init 
      monster.modules.actions.init("Monster ", 30, 20, true);
	  //showme et autres
      b6.onclick = monster.modules.actions.showme;
      b2.onclick = monster.modules.actions.run;
      b3.onclick = monster.modules.actions.fight;
      b7.onclick = monster.modules.actions.work;
      b5.onclick = monster.modules.actions.eat;
      b4.onclick = monster.modules.actions.sleep;
      b1.onclick = monster.modules.actions.newLife;
      kill.onclick = monster.modules.actions.kill;
      setInterval(function(){
        monster.modules.actions.random();
      },12000);

    },
	 //Etape 2 Q1 fonction run  fonction log(message)
    log : function(message){
      let boiteAction = document.getElementById('#actionbox');
      let paragraphe = document.createElement("<p>");
      let childs = boiteAction.childNodes
      paragraphe.innerHTML = message;
      boiteAction.insertBefore(paragraphe, boiteAction.firstChild);

    },
	//Etape 2 Q2 fonction *displayStatus  //Etape 4 Q2 Q3
    displayStatus : function(life, money, awake){
      let vie=statusLine.childNodes[1];
      let argent=vie.nextSibling;
      let rev=argent.nextSibling;

      let vVie=document.createTextNode("Life: "+life);
      let vArgent=document.createTextNode("Money: "+money);
      let vReveil=document.createTextNode(awake ? "se réveille ":"s'endort");

      vie.replaceChild(vVie, vie.firstChild);
        argent.replaceChild(vArgent,argent.firstChild);
          rev.replaceChild(vReveil,rev.firstChild);
            if(life<5){ // modif des couleurs en fonction de ces lifes 
            m.style.backgroundColor="red";
			}else if(life>=5 && life<10){
				 m.style.backgroundColor="orange";
			}else if(life>=10 && life<15){
				m.style.backgroundColor="blue";
			}else if(life>=15 && life<20){
				m.style.backgroundColor="yellow";
			}else{
            m.style.backgroundColor="green";
          }
          m.style.border=money*0.5+"px solid yellow"; // varier l'epaisseur 
        //  console.log(m.style);

    }
  }
})();

//Etape 1 Q4 fonction load
window.onload = monster.modules.app.run;