//todo: figure out why rows aren't being created properly when reset --changed to display block
//why is hovering code for new grid broken?
//get the width and height of squares to fill #wrapper

var rows = columns = 100; //define how many rows and columns in your grid
var columns = 100;
var $row = $("<div />", { // make the jQuery variable row and make it a <div class="row">
	class: 'row'
});

var $square = $("<div />", {
	class: 'square'
});



$(document).ready(function() { 
	for (var i = 0; i < columns; i++) { //create squares in the row
		$row.append($square.clone());
	};

	for (var i = 0; i < rows; i++) { //add more rows to the wrapper
		$("#wrapper").append($row.clone());
	};

	$(".square").mouseover(function() {
		$(this).addClass('blackBackground');
	});

	document.getElementById("reset").onclick = function() {
		var squaresPerSide = prompt("How many squares per side would you like in your new grid?", "Please input a number");

		$(".row").remove();
		$(".square").remove();

		//

		// if (isnaN(squaresPerSide)) {
		// 	alert("Please enter a number");
		// 	var squaresPerSide = prompt("How many squares per side would you like in your new grid?", "Please input a number");
		// }

		var rows = columns = squaresPerSide;
		// var pixel = 1000 / rows;

		// document.getElementByClassName("square").css({
		// 	'height': pixel //height and width is equal to 1000 / number of squares
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
			$("#wrapper").append($row.clone());
		};

		// $(".square").mouseover(function() {
		// 	$(this).addClass('blackBackground');
		// )};

	};

	document.getElementById("clear").onclick = function() {
		$(".square").removeClass("blackBackground");
	};

	document.getElementById("print").onclick = function() {
		alert(rows);
	};
});