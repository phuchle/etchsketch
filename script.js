//todo: figure out why rows aren't being created properly when reset --changed to display block
//why is hovering code for new grid broken? --added code to 
//get the width and height of squares to fill #wrapper
// //

var rows = 5; //define how many rows and columns in your grid
var columns = 5; //define how many rows and columns in your grid
// var pixel = 1000 / rows + 'px';


$(document).ready(function() { 



	// var rows = prompt("Please enter the length of your grid", "Please input a number");
	// var columns = prompt("Please enter the width of your grid", "Please input a number");

	makeGrid();

	document.getElementById("reset").onclick = function() {
		$(".square").removeClass("blackBackground");
		$(".square").remove();
		$(".row").remove();
	
		rows = parseInt(prompt("Please enter the length of your new grid", "Please input a number"), 10);
		columns = parseInt(prompt("Please enter the width of your new grid", "Please input a number"), 10);

		makeGrid();
	};	

	document.getElementById("clear").onclick = function() {
		$(".square").removeClass("blackBackground");
	};
});



function makeGrid() {
	// var $wrapper = $("<div />", {
	// 	class: 'wrapper'
	// });

	var $row = $("<div />", { // make the jQuery variable row and make it a <div class="row">
		class: 'row'
	});

	var $square = $("<div />", {
		class: 'square'
	});

	for (var i = 0; i < columns; i++) { //create squares in the row
		$row.append($square.clone());
	};

	for (var i = 0; i < rows; i++) { //add more rows to the wrapper
		$('#wrapper').append($row.clone());
	};

	var width = ($('#wrapper').width())/ rows;
	$('.square').css({"width": width, "height": width});

	$('.square').mouseover(function() {
		$(this).addClass('blackBackground');
	});
};