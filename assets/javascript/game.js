
	
$(document).ready(function(){


var match=0;
var wins = 0;
var losses = 0;
var subMessage; 
var crystal = {feature: Math.floor(Math.random()*11) + 1, feature1: Math.floor(Math.random()*11) +1, feature2: Math.floor(Math.random()*11)+1, feature3: Math.floor(Math.random()*11)+1};
var total=0;
var game = true;
var audio = new Audio('..Audience_Applause.mp3');

function random1() {
	match = Math.floor(Math.random() * 100 + 10);
	$("#match").html(match);


};

function status () {
console.log("checking status");

	if(total==match) {
		wins=wins+1;

		$('#wins').html("WINS: " + wins);
		$('#subMessage').html("You win!");
		$('.btn, #header').animate({
			opacity: '.3'
		});
		game=false;
	}

	else if(total>match) {
		losses=losses+1;
		$('#losses').html("LOSSES:" + losses);
		$('#subMessage').html("You lost.");
		$('.btn, #header').animate({
			opacity: '.3'
		});
		game=false;
	}
};


random1();


$("#ins").on("click", function() {
	$('#instructions').fadeOut();
});



$("#button1").on("click", function() {
	if(game==true){
	total = crystal.feature + total;
	$("#score1").html("TOTAL: " + total);
	console.log(total);
	status();


};
});

$("#button2").on("click", function(){ 

	if(game==true){
	total = crystal.feature1 + total;
	$("#score1").html("TOTAL: " + total);
	console.log(total);
	status();
	
};
});



$("#button3").on("click", function() {
	if(game==true){
	total = crystal.feature2 + total;
	$("#score1").html("TOTAL: " + total);
	console.log(total);
	status();

};
});


$("#button4").on("click", function() {
	if(game==true){
	total = crystal.feature3 + total;
	$("#score1").html("TOTAL: " + total);
	console.log(total);
	status();

};
});


$("#reset").on("click", function() {
	total=0;
	$("#score1").html("TOTAL: " + total);
	random1();
	$('#subMessage').html(" ");
	crystal.feature3;
	$('.btn, #header').animate({
			opacity: '1.0'
		});
	game=true;
	
	
});

$("#reset").on("click", function() {
	crystal = {feature: Math.floor(Math.random()*5), feature1: Math.floor(Math.random()*10), feature2: Math.floor(Math.random()*20), feature3: Math.floor(Math.random()*25)};

});


});































