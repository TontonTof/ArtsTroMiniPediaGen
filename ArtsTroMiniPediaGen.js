/*
 * ArtsMiniPediaGen 0.0.1
 *
 * http://lesartstronautes.bbconcept.net
 *
 * Copyright 2018 Tonton Tof @ lesartstronautes.bbconcept.net
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 * 
 */
 

// ouvrir la boite de dialogue info 
function BBCodeGen() {
	
	// Vérifie présence champs
	if($("#titre").val()!="" && $("#categories").val()!="" && $("#resume").val()!="" && $("#url").val()!="") {
		
		// Détermine la réponse juste 
		var ReponseJuste = 1 
		if ($("#reponsejuste1").val()=="vrai") ReponseJuste=1;
		if ($("#reponsejuste2").val()=="vrai") ReponseJuste=2;
		if ($("#reponsejuste3").val()=="vrai") ReponseJuste=3;			
		
		// Générer le bbcode
		var bbcode = $("#titre").val()+"\n\n";
		bbcode += "[b]Catégories :[/b]"+$("#categories").val()+"\n";
		bbcode += "\n[hr]\n";
		bbcode += "[b]Fiche :[/b]\n";
		bbcode += $("#resume").val()+"\n";
		bbcode += "[url="+$("#url").val()+"]"+$("#url").val()+"[/url]\n";
		bbcode += "\n[hr]\n";		
		bbcode += "[img]"+$("#urlimage").val()+"[/img]";		
		bbcode += "\n[hr]\n";
		bbcode += "[b]Quizz :[/b]\n";
		bbcode += "Question : "+$("#question").val()+"\n\n";
		bbcode += "Réponse1 : "+$("#reponse1").val()+"\n";
		bbcode += "Réponse2 : "+$("#reponse2").val()+"\n";
		bbcode += "Réponse3 : "+$("#reponse3").val()+"\n\n";
		bbcode += "Réponse juste : "+$("#reponsejuste:checked").val()+"\n\n";
		
		// Afficher le BBCode 
		var message="BBCode à copier dans votre sujet : \n\n"+bbcode;
		alert(message);
								
	}
}
