// Extended RTE for SharePoint
// Created By Boris Gomiunik 
// Please visit my Blog to find more tricks for SharePoint: http://webborg.blogspot.com
// Project posted on CodePlex -- http://www.codeplex.com/erte

//Localization arrays. To localize, copy the line below and change the LCID.
var erte1033 = new Array("Please input details","Alt Text","This will be displayed in RSS feeds","Embed Code","Paste your Embed code here","Insert","Close"); //english
var erte1060 = new Array("Vnesite parametre","Besedilo","Besedilo bo izpisano v RSS-viru","Embed koda","Prilepite Embed kodo v polje","Vstavi","Zapri"); //english

//set the language. If there is no localization array available, use english as default
if (window['erte'+L_Menu_LCID]) {
	erte_lang = window['erte'+L_Menu_LCID];
} 
else {
	erte_lang = window['erte1033']  
}

//this is the function that generates the "Insert Flash" dialog.
function embedFlash(gb_whichElement) {
  while (gb_whichElement.id.indexOf('_toolbar') == -1) {
  	gb_whichElement = gb_whichElement.parentNode;
  }
  fieldID = gb_whichElement.id;
  fieldID = fieldID.substring(0,fieldID.indexOf('_toolbar'));
  RTE_SaveSelection(fieldID);
  var generator=window.open('','question','height=300,width=300,scrollbar=no,menu=no,toolbar=no,status=no,location=no');
  generator.document.write('<html><head><title>'+erte_lang[0]+'</title>' + 
  '<script type="text/javascript">function insertFlash() { \n' + 
  'var finalString = "<span class=erte_embed id=" \n' + 
  'finalString += escape(document.getElementById("embed").innerText) \n' + 
  'finalString += ">" \n' + 
  'finalString += document.getElementById("alt").value\n' + 
  'finalString += "</span>"\n' + 
  'window.opener.RTE_GetSelection(document.getElementById("field").value).pasteHTML(finalString)\n' + 
  'window.close()\n;' +
  '}'+"<\/script>" +
  '</head><body style="margin:10px; font-family: verdana; font-size: 10px;">' + 
  '<strong>'+erte_lang[1]+':</strong> <input id="alt" type="text" style="border: 1px black solid; width: 200px; font-family: verdana; font-size: 10px;"/><br/><span style="color: gray">('+erte_lang[2]+')</span>' + 
  '<br/> <br/><strong>'+erte_lang[3]+':</strong><br/>' + 
  '<textarea id="embed" style="width: 250px; height: 100px; border: 1px black solid; font-family: verdana; font-size: 10px;"></textarea>' + 
  '<br/><span style="color: gray">('+erte_lang[4]+')</span><br/>' +
  '<input type="hidden" id="field" value="'+fieldID+'"' + 
  '<br/> <br/><button style="font-family: verdana; font-size: 10px;" onclick="insertFlash()">'+erte_lang[5]+'</button>' +
  '&nbsp;&nbsp;<button style="font-family: verdana; font-size: 10px;" onclick="window.close()">'+erte_lang[6]+'</button>' + 
  '</body></html>');
  generator.document.close();
}




function Execute_ERTE() {

/* --- This part here adds the button --- */
objekty = document.getElementsByTagName('table');
for (i=0;i<objekty.length;i++) {
	if (objekty[i].className == 'ms-rtetoolbarmenu ms-long' && objekty[i].childNodes[0].childNodes.length == 2) {
		var newCell = objekty[i].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].insertCell();
		newCell.innerHTML = '<a href="javascript:" unselectable="on" onclick="embedFlash(this); return false"><img border="0" src="/_catalogs/masterpage/erte.gif"/></a>'
	}
}

/* --- This part will make the function --- */
	objekty = document.getElementsByTagName('span');
	for (i=0;i<objekty.length;i++) {
		if (objekty[i].className == 'erte_embed') {
			objekty[i].innerHTML = unescape(objekty[i].id)
		}
	}
}