// selecting all games
function getAllGameVideos() {
    
    let xmlContent = '';
	fetch('https://gamezone.ninja/Resources/games.xml').then((response)=>{
		response.text().then((xml)=>{
            xmlContent = xml;
			let parser = new DOMParser();
			let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
			let games = xmlDOM.querySelectorAll('game');
            var xmlContent2 = '';
			games.forEach(gameXmlNode => {
				xmlContent2 += "<li>"
							+ "<a href='" + gameXmlNode.children[10].innerHTML + "'>"	
								+ "<h2>" + gameXmlNode.children[0].innerHTML + "(" + gameXmlNode.children[4].innerHTML +  ")</h2>"
							+ "</a>"
								+ "<iframe width='560' height='315' src='" + gameXmlNode.children[3].innerHTML + "' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
								+ "<div>" + gameXmlNode.children[1].innerHTML + "</div>"
						+ "</li>";
            });
			document.getElementById("games-game-list").innerHTML = xmlContent2;
        });
        
    });
}

// selecting all the games which are of the category "top"
function getTopRatedGames() {
	let xmlContent = '';
	fetch('https://gamezone.ninja/Resources/games.xml').then((response)=>{
		response.text().then((xml)=>{
            xmlContent = xml;
			let parser = new DOMParser();
			let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
			let games = xmlDOM.querySelectorAll('game');
			var xmlContent2 = '';
			
			xmlContent2 = assembleContent("top", xmlContent2, games);
			document.getElementById("games-game-list").innerHTML = xmlContent2;
        });
        
    });
}

// selecting all the games which are of the category "awaited"
function getAwaitedGames() {
	let xmlContent = '';
	fetch('https://gamezone.ninja/Resources/games.xml').then((response)=>{
		response.text().then((xml)=>{
            xmlContent = xml;
			let parser = new DOMParser();
			let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
			let games = xmlDOM.querySelectorAll('game');
			var xmlContent2 = '';
			
			xmlContent2 = assembleContent("awaited", xmlContent2, games);
			document.getElementById("games-game-list").innerHTML = xmlContent2;
        });
        
    });
}

// selecting all the games which are of the category "new"
function getNewGames() {
	let xmlContent = '';
	fetch('https://gamezone.ninja/Resources/games.xml').then((response)=>{
		response.text().then((xml)=>{
            xmlContent = xml;
			let parser = new DOMParser();
			let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
			let games = xmlDOM.querySelectorAll('game');
			var xmlContent2 = '';
			
			xmlContent2 = assembleContent("new", xmlContent2, games);
			document.getElementById("games-game-list").innerHTML = xmlContent2;
        });
        
    });
}

// fuction to assemble the structure for each category
function assembleContent(category, struct, data) {
	data.forEach(gameXmlNode => {
		if (gameXmlNode.children[9].innerHTML.includes(category)) {
			struct += "<li>"
					+ "<a href='" + gameXmlNode.children[10].innerHTML + "'>"
						+ "<h2>" + gameXmlNode.children[0].innerHTML + "(" + gameXmlNode.children[4].innerHTML +  ")</h2>"
					+ "</a>"
						+ "<iframe width='560' height='315' src='" + gameXmlNode.children[3].innerHTML + "' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
						+ "<div>" + gameXmlNode.children[1].innerHTML + "</div>"
					 
				+ "</li>";
		}

	});
	return struct;
}

// get a specific Game
function getGame(name) {
	let xmlContent = '';
	fetch('https://gamezone.ninja/Resources/games.xml').then((response)=>{
		response.text().then((xml)=>{
            xmlContent = xml;
			let parser = new DOMParser();
			let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
			let games = xmlDOM.querySelectorAll('game');
			var xmlContent2 = '';

			games.forEach(gameXmlNode => {
				if (gameXmlNode.children[0].innerHTML.includes(name)) {
					xmlContent2 += 
								  "<div class='category'>" + " Category: " + gameXmlNode.children[8].innerHTML + "</div>"
								+ "<img class='gamePic' src=" + gameXmlNode.children[2].innerHTML + " alt='GamePicture'>"
								+ "<div class='publisher'>" + "Publisher: " + gameXmlNode.children[6].innerHTML + "</div>"
								+ "<div class='release'>" + "Release Date: " + gameXmlNode.children[4].innerHTML + "</div>"
								+ "<div class='rating'>" + "Rating: " + gameXmlNode.children[7].innerHTML + "</div>"
								+ "<div class='description'>" + "<h3>Description</h3> <br/>" + gameXmlNode.children[1].innerHTML + "</div>"
								+ "<iframe width='800' height='600' src='" + gameXmlNode.children[3].innerHTML + "' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
								+ "<div class='review'>" + "<h3>Review</h3> <br/>" + gameXmlNode.children[5].innerHTML + "</div>";
				}
		
			});
			document.getElementById("games-game-list").innerHTML = xmlContent2;
        });
        
    });
}