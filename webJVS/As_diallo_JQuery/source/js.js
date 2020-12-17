var module={}

// exercices JQuery


module.question_A = {
	  // methode methode_echange de classe
	methode_echange:function(){
	  $("#changingText").toggleClass('hop');
	  $("#changingText").toggleClass('zap');
	},
	  // methode d'initialisation qui installe echange comme handler de l'evt
	instalHandlerEvt:function(){
	  $("#changingText").on('click',module.question_A.methode_echange);
	}
}


module.question_B = {
	//lors du survol d'une boite : augmentation de sa largeur de 10px
    ajusterDimension:function(evt){
	//reccupere les dimmensions ( largeur ) et definir la largeur de l'element
    evt.target.style.width=(evt.target.offsetWidth+10)+"px";
  },
  // click sur une boite : retour à sa largeur initiale
  initDimension:function(evt){
      evt.target.style.width = "100px ";
  },

  init:function(){
    console.log($("#square").children());
    $("#square").children().each((i,evt) => {
      $(evt).on("mouseover",module.question_B.ajusterDimension);
      $(evt).on("click",module.question_B.initDimension);
    });
    $("#one").on("click",module.question_B.ajoutBoite);
    $("#two").on("click",module.question_B.changeBoite);
    $("#three").on("click",module.question_B.effetFade);
  },

  ajoutBoite:function(){
    var evt =$("#square");
    var derniere_boite = evt.children().length;
    var new_boite =$(" <div> ");
    new_boite.addClass("boite_orange");
    new_boite.append(derniere_boite+1);
    new_boite.on("mouseover",module.question_B.ajusterDimension);
    new_boite.on("click",module.question_B.initDimension);
    evt.append(new_boite);
  },

  changeBoite(){
    console.log("test");
    console.log($("#square").children());
    $("#square").children().each((i,evt)=>{
      $(evt).toggleClass('boite_orange');
      $(evt).toggleClass('boite_verte');
    });
  },

  effetFade(t){
      $("#square").children().each((i,evt)=>{
        if($(evt).css('opacity') == 1){
            $(evt).fadeTo(1000,0);
        }
		if($(evt).css('opacity') == 0){
            $(evt).fadeTo(1000,1);
        }
      });
  }
}

//module.question_C = {
	//function myFunction() {
	  //document.getElementById("slider").innerHTML = "Hello World";
	//}
	
//	$("#slider").click(function() {
	//	alert(this.id);
	//});
	
//}

$(window).on('load',() => {
  module.question_A.instalHandlerEvt();
  module.question_B.init();
})
