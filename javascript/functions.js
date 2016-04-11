/*
	GLOABAL VARIABLES
*/
var COMPUTER_PLAYER_LIST = [];
var PLAYER = new Player("united states","United States")




/*
	CORE FUNCTIONS
*/

//Loading functions
function loadComputerPlayers()
{

	COMPUTER_PLAYER_LIST.push(new Player("england", "England"))
	COMPUTER_PLAYER_LIST.push(new Player("france", "France"))
	COMPUTER_PLAYER_LIST.push(new Player("germany", "Germany"))
	COMPUTER_PLAYER_LIST.push(new Player("italy", "Italy"))
	COMPUTER_PLAYER_LIST.push(new Player("ottoman", "Ottoman"))
	COMPUTER_PLAYER_LIST.push(new Player("canada", "Canada"))


	var html = ""
	for(ele of COMPUTER_PLAYER_LIST)
	{
		html += "<tr id=\"" + ele.nation.toLowerCase() + "-row\"><td id=\"" + ele.nation.toLowerCase() + "-nation\">" + ele.nation + "</td>"
			+ "<td id=\"" + ele.nation.toLowerCase() + "-vp\">" + ele.victory_points + "</td>"
			+ "<td id=\"" + ele.nation.toLowerCase() + "-dp\">" + ele.defeat_points + "</td>"
			+ "<td id=\"" + ele.nation.toLowerCase() + "-power\">?</td></tr>"

		updateHistory("<b>" + ele.leader + "</b>" + " from " + "<b>" + ele.nation + "</b> has entered the game.")
	}

	$("#player-list-table tr").first().after(html)

}

function loadPlayer(leader, nation)
{
	PLAYER = new Player(leader,nation)

	updateHistory("<b>" + PLAYER.leader + "</b>" + " from " + "<b>" + PLAYER.nation + "</b> has entered the game.")
}


//UI Functions
function updatePlayerScore()
{
	$("#victory-points").text(PLAYER.victory_points)
	$("#defeat-points").text(PLAYER.defeat_points)
	$("#power-points").text(PLAYER.power)
}

function updateHistory(text)
{	
	var html = "<li>" + text + "</li>"
	$("#play-history-list").append(html)
}

//Game Functions


//Computer Decision Functions

