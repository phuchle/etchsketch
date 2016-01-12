//todo: figure out why rows aren't being created properly when reset --changed to display block
//why is hovering code for new grid broken? --added code to 
//get the width and height of squares to fill #wrapper
//

var rows = 100; //define how many rows and columns in your grid
var columns = 100; //define how many rows and columns in your grid
// var pixel = 1000 / rows + 'px';

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
		$("#wrapper").append($row.clone());
	};

	// function changeSquare() { // modify square to fit wrapper
	// 	var elements = document.getElementsByClass('square');
	// 	for (var i = 0; i < elements.length; i++) {
	// 		$('.square').css({
	// 			'height': pixel,
	// 			'width': pixel 
	// 		});
	// };

	$(".square").mouseover(function() {
		$(this).addClass('blackBackground');
	});
};

$(document).ready(function() { 

	makeGrid();
 	
	document.getElementById("reset").onclick = function() {

		$(".square").removeClass("blackBackground");
		$(".square").remove();
		$("row").remove();
		
		var rows = prompt("Please enter the length of your new grid", "Please input a number");
		var columns = prompt("Please enter the width of your new grid", "Please input a number");

		

		// if (isnaN(squaresPerSide)) {
		// 	alert("Please enter a number");
		// 	var squaresPerSide = prompt("How many squares per side would you like in your new grid?", "Please input a number");
		// }
		
		makeGrid();
	};	

	document.getElementById("clear").onclick = function() {
		$(".square").removeClass("blackBackground");
	};

	
});