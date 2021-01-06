function testing() {
    
    let xmlContent = '';
    let listGames = document.getElementById('games');
	fetch('https://gamezone.ninja/Resources/games.xml').then((response)=>{
		response.text().then((xml)=>{
            xmlContent = xml;
			let parser = new DOMParser();
			let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
			let games = xmlDOM.querySelectorAll('game');
            var xmlContent2;
			games.forEach(gameXmlNode => {
				xmlContent2 += "<li>"
							+ "<a href='#'>"
								+ "<h2>" + gameXmlNode.children[0].innerHTML + "(" + gameXmlNode.children[4].innerHTML +  ")</h2>"
								+ "<iframe width='560' height='315' src='" + gameXmlNode.children[3].innerHTML + "' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
								+ "<div>" + gameXmlNode.children[1].innerHTML + "</div>"
							 + "</a>"
						+ "</li>";
            });
			document.getElementById("games-game-list").innerHTML = xmlContent2;
        });
        
    });
}