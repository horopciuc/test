var Module =(function() {

	var _btn    = $('#Save');
	var _btn2   = $('#Save2');
	var _input2 = $('#txtInput2');
	var _input  = $('#txtInput');


	var createElement = function() {

		//posibil sa fie nevoie ca _input & _input2 sa fie aduse in functie
		//var _text = _input.val();
		var _text = _btn.val();
		var _ul   = $('#ulist');
		var _str  = '<li>' + _text + '<button class="deleteButton">Delete</button> </li>';
		console.log("in create element");
	};

	var addElement = function() {

		//replace _btn w/ $('$Save') ?
		_btn.on("click", createElement());
		console.log("in add element");
	};

	// var addLiElement = function() {
	// _ul.append(_str);
	// }

	var init = function() {
		addElement();
	};

	return {
		init: init
	};

})();

Module.init();

// Function for btn to add li element
// function myFunction() {
// 	var text   = input.val();
// 	var ul 	   = $('#ulist');
// 	var str    = '<li>' + text + '<button class="deleteButton">Delete</button> </li>';
// 	ul.append(str);
// }

// //Function for btn2 to add li element
// function myFunction2() {
// 	var text2   = input2.val();
// 	var ul2 	= $('#ulist2');
// 	var str2    = '<li>' + text2 + '<button class="deleteButton">Delete</button> </li>';
// 	ul2.append(str2);
// }

// //inside the ul with id="ulist", delete the li element when clicked on the corresponding del btn
// $("#ulist").on('click','.deleteButton', function() {
//     $(this).parent().remove();
// });

// //inside the ul with id="ulist2", delete the li element when clicked on the corresponding del btn
// $("#ulist2").on('click','.deleteButton', function() {
//     $(this).parent().remove();
// });

// //call btn function on click
// btn.on('click', myFunction);
// //call btn2 function on click
// btn2.on('click', myFunction2);
