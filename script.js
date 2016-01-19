//todo: add fade in option, add randomized colors (themed?), clean it up

var rows = 5; //define how many rows and columns in your grid
var columns = 5; //define how many rows and columns in your grid


$(document).ready(function() { 

	makeGrid();

	document.getElementById("reset").onclick = function() {
		$(".square").removeClass("blackBackground");//clears the grid for a new
		$(".square").remove();
		$(".row").remove();
	
		rows = parseInt(prompt("Please enter the length of your new grid (1-100)", "Please input a number"), 10);
		columns = parseInt(prompt("Please enter the width of your new grid (1-100)", "Please input a number"), 10);

		makeGrid();
	};	

	document.getElementById("clear").onclick = function() {//wipes grid
		$(".square").removeClass("blackBackground");
	};
});



function makeGrid() {

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