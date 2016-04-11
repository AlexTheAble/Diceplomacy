var Player = function(leader, nation){

	this.leader = leader
	this.nation = nation

	this.victory_points = 0
	this.defeat_points = 0

	this.power = randomNum()

	this.ally = null
};

Player.prototype.reform = function(){

	this.power = randomNum()
	return this.power
};

Player.prototype.alliance = function(ally){
	this.ally = ally
};

Player.prototype.addVP = function(){
	this.victory_points = this.victory_points + 1
};

Player.prototype.addDP = function(){
	this.defeat_points = this.defeat_points + 1
};

//utility function for generating random integers
function randomNum(){
	return Math.floor(Math.random() * (7-1) + 1)
};