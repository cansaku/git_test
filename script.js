'use strict'

// {


const Msg = function(arg){

	// private property
	let msg = arg.msg;

	// getter
	this.getMsg = function(){
		return msg;
	}

};

class Player {

	constructor(name,score){
		this.name = name;
		this.score = score;
	}

	showInfo(){
		console.log(`name: ${this.name}  score: ${this.score}`);
	}

	static showVersion(){
		console.log('Player class ver 1.0');
	}

}


const taguchi = new Player('taguchi',32);
const fkoji = new Player('fkoji',55);

// console.log(taguchi.name);
// taguchi.showInfo();
// fkoji.showInfo();

// Player.showVersion();

class SoccerPlayer extends Player{
	constructor(name,score,number){
		super(name,score);
		this.number = number;

	}

	kick(){
		console.log('goal');
	}
}


const tsubasa = new SoccerPlayer('tsubasa',99,10);

tsubasa.kick();
console.log(tsubasa.number);
tsubasa.showInfo();







// }