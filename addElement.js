var Module = (function() {

	var //selectors
		$input  = $('#txtInput'),
		$btn 	= $('#Save'),
		$ul 	= $('#ulist'),
		$input2 = $('#txtInput2'),
		$btn2 	= $('#Save2'),
		$ul2	= $('#ulist2');

	var createElement = function(selectedButton) {
		if (selectedButton == 1) {
			var //useful variables
				_text = $input.val(),
				_ul   = $ul,
				_str  = '<li>' + _text + '<button class="deleteButton">Delete</button> </li>';
			_ul.append(_str);
		}

		if (selectedButton == 2) {
			var //useful variables
				_text = $input2.val(),
				_ul   = $ul2,
				_str  = '<li>' + _text + '<button class="deleteButton">Delete</button> </li>';
			_ul.append(_str);
		}
	};

	var	addElement = function() {
		$btn.click(function() {
			createElement(1);
		});

		$btn2.click(function() {
			createElement(2);
		});
	};

	var removeElement = function(){
		console.log("remove element");
		$('#ulist').on("click", ".deleteButton", function() {
			$(this).parent().remove();
		})
		$('#ulist2').on("click", ".deleteButton", function() {
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
