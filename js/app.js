$(document).ready(function(){
$(".ryu").mouseenter(function() {
$(".ryu-still").hide();
$(".ryu-ready").show();
})

.mouseleave(function(){
$(".ryu-ready").hide();
$(".ryu-still").show();

})

.mousedown(function() {
playHadouken();
$(".ryu-ready").hide();
$(".ryu-throwing").show();
$(".hadoken").finish().show()
.animate (
	{"left":"300px"},
	500,
	function(){
		$(this).hide();
		$(this).css("left", "-212px");
}
);

})


.mouseup(function(){
$(".ryu-throwing").hide();
$(".ryu-ready").show();
})

// start ryu cool code 

$(document).keydown(function(e){
	if(e.keyCode == 88){	
		$(".ryu-ready").hide();
		$(".ryu-throwing").hide();
		$(".ryu-still").hide();
		$(".ryu-cool").show();
 }
 });

$(document).keyup(function(e){
if(e.keyCode == 88) {
  		$(".ryu-ready").show();
		$(".ryu-throwing").hide();
		$(".ryu-still").hide();
		$(".ryu-cool").hide();
}
});

// end ryu cool code


});



function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}




