$(document).on('ready', function() {
  

// 1. Create HTML Page
// 2. On page load, dynamically add a UL
// 3. Create a JS array containg a list of strings of your favorite movies
// 4. Using DOM creation, append an li to 

	$('body').append('<ul id="test"></ul>');

	var games = ['One', 'Two', 'Three'];

	for (var i = 0; i < games.length; i++) {
		$('#test').append('<li>' + games[i] + '</li>');
	};


// using clone

var newGameUL = $('#test').clone();
newGameUL.append('<li>This is a clone</li>');
newGameUL.css('backgroundColor', '#F00');

$('body').append(newGameUL);


// using power of $()

var newElement = $('<h1>Here is an H1</h1>');
newElement.css('color', '#F00');
$('body').prepend(newElement);
});

//$(document).on('ready', function(){})
//$(document).ready(function)(){})
//$(function)(){})
//Above is all the same thing