var xhttp = new XMLHttpRequest();
var xmlData;


function getGameListForAllGames(filter) {
	if (xmlData == undefined) {	
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				xmlData = this.responseXML;
				gameListGame(filter);
			}	
		};
	}
}

function getGameListForTopRated(filter) {
	if (xmlData == undefined) {
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				xmlData = this.responseXML;
				gameListGame(0);
			}
		}
	}
}

function gameListGame(filter) {
	var xmlNames = xmlData.getElementsByTagName("name");
	var xmlDescriptions = xmlData.getElementsByTagName("description");
	var xmlVideos = xmlData.getElementsByTagName("video");
	var xmlRelease = xmlData.getElementsByTagName("release");
	let htmlGameList = "";
	
	

	// TODO function to take all the specific Categories+

	for (var i = 0; i < xmlNames.length; i++) {
		if (filter == 1 && xmlData.getElementsByTagName("game")[i].getAttribute("info") != "top") {
			continue;
		} else if (filter == 2 && xmlData.getElementsByTagName("game")[i].getAttribute("info") != "soon") {
			continue;
		}
		
		htmlGameList += "<li>"
							+ "<a href='#'>"
								+ "<h2>" + xmlNames[i].childNodes[0].nodeValue + "(" + xmlRelease[i].childNodes[0].nodeValue +  ")</h2>"
								+ "<iframe width='560' height='315' src='" + xmlVideos[i].childNodes[0].nodeValue + "' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
								+ "<div>" + xmlDescriptions[i].childNodes[0].nodeValue + "</div>"
							 + "</a>"
						+ "</li>";
	}
	
	document.getElementById("games-game-list").innerHTML = htmlGameList;
}

xhttp.open("GET","https://gamezone.ninja/Resources/games.xml", true);
xhttp.send();