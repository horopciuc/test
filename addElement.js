var Module = (function() {

	var //selectors
		$input  = $('#txtInput'),
		$btn 	= $('#Save'),
		$ul 	= $('#ulist'),
		$input2 = $('#txtInput2'),
		$btn2 	= $('#Save2'),
		$ul2	= $('#ulist2'),
		$btns   = $('.Save');

	var createElement = function(selectedButton) { console.log(selectedButton);
/*		if (selectedButton == "Save1") {
			var //useful variables
				_text = $input.val(),
				_ul   = $ul,
				_str  = '<li>' + _text + '<button class="deleteButton">Delete</button> </li>';
			_ul.append(_str);
		}

		if (selectedButton == "Save2") {
			var //useful variables
				_text = $input2.val(),
				_ul   = $ul2,

			_ul.append(_str);
		}
*/
		var myList = $('#ulist-'+ selectedButton),
			value = $("#txtInput-"+selectedButton).val(),
			_str  = '<li>' + value + '<button class="deleteButton">Delete</button> </li>';

			console.log(value);

			myList.append(_str);

	};

	var	addElement = function() {


		$btns.click(function() {
			var x = $(this).data("id");

			var inpt = $('#txtInput-' + x);
			if ($.trim( inpt.val()) == '') {
				console.log('not cool');
			}
			else {
				createElement(x);
			}
		});
	};

	var removeElement = function(){
		console.log("remove element");
		$('#ulist-1').on("click", ".deleteButton", function() {
			$(this).parent().remove();
		})
		$('#ulist-2').on("click", ".deleteButton", function() {
			$(this).parent().remove();
		})



		// $('#deleteButton').click(function() {
		// 	$(this).parent().remove();
		// });
	}

	var	init = function() {
		addElement(),
		removeElement();


	};

	return {
		init: init
	};

})();

Module.init();
