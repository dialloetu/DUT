function logClick(){
	console.log("vous avez cliquer sur --cliquez ici -- ");
}
	 
var b1 = document.querySelector("#ex1");
b1.addEventListener("click", ()=> { logClick(); }, false);


var b2 = document.querySelector("#ex3");
b2.addEventListener("click", ()=> { console.log("vous avez cliquer sur effacer"); }, false);


function insererItem(){
	 let b1 = document.querySelector("#ex1");
     //let ul = document.getElementById("#ex1");
     let li = document.createElement("li");
	 li.setAttribute("id", "element4"); // added line
	 let p = document.appendChild(document.createTextNode("new 4 "));
	 li.appendChild(p);
	 bl.appendChild(li);
	 bl.insertBefore(document.createElement("test"), p);
}

b1.addEventListener("click", ()=> { insererItem(); }, false);