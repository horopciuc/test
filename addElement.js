var Module = (function() {

	//var //selectors
		// $input  = $('#txtInput'),
		// $btn 	= $('#Save'),
		// $ul 	= $('#ulist'),
		// $input2 = $('#txtInput2'),
		// $btn2 	= $('#Save2'),
		// $ul2	= $('#ulist2'),
		// $btns   = $('.Save');

	var //selectors & variable
		$nOfInputs = $('#nmbInputs'),
		$createBtn = $('#createBtn'),
		//$liBtn   = $('.btnClass'),
		$elementId = 1;


	var getNumbOfDivs = function() {
		$createBtn.click(function() {
			var x = $nOfInputs.val();
			createDivs(x);
			// console.log("value of input: " +x);
		})
		}

	var createDivs = function(nOfDivs) { 
		console.log(nOfDivs);
		for (var numberOfDivs = 0; numberOfDivs < nOfDivs; numberOfDivs++) {
			// $createBtn.on("click", function() {
							//we create a div to which we assign a class & a data-attribute
							//and inside this div we add 
							//an input(w/ dataAtrb), a button(w/ class&dataAtrib) and an ul(w/)
				var strr = '<div class="divClass" data-divId=' + $elementId + ' style="float: left;"> '+
						       '<input type="text" class="inputClass" data-inputId=' + $elementId + '>' +
						       '<button class="btnClass" data-btnId=' + $elementId + ' >Save</button>' +
						       '<ul class="ulClass" data-ulId=' + $elementId + '>' +
						       '</ul>' +
							'</div>';
				$elementId++;
				$('body').append(strr);
			}
			// })
		}

	var createLi = function() {

		/*$('.btnClass').on("click", "" function() {
			var reqId = $(this).data("btnId"); //will try to change to btnId
			console.log(reqId);

		})
		*/

		//		!!!
		// !!! ---> TODO - make use of dataAttributes, instead of using classes
		//		!!!


		$(document).on("click", ".btnClass", function() {
			var atrId = $(this).attr('data-btnId');
			var childsId = atrId;
			var inputValue = $(this).siblings('.inputClass').val();
			var liToBeAdded = '<li class="liClass" data-liId=' + childsId + '>' + inputValue +
							  	'<button class="delBtnClass" data-delBtn=' + childsId + '>Delete</button'+ 
							  '</li>';
			console.log("childId before: "+childsId);
			childsId++;
			console.log("childId after: "+childsId);
			$(this).siblings('.ulClass').append(liToBeAdded);
			console.log(inputValue);
			// console.log(idu);


			// $("button~ul").append($(this).)

			/*
			var $butoane = $('.btnClass');
			$butoane.on("click", " "function() {
				var z = $(this).data("btnId");
				console.log(z);
			})*/
			console.log("ok");
		})

	}

	var removeLi = function() {
		$(document).on("click", ".delBtnClass", function() {
			var dId = $(this).attr("data-delBtn");
			console.log(dId);
			$(this).parent().remove();
		})
	}
	/*var createElement = function(selectedButton) { console.log(selectedButton);
		// if (selectedButton == "Save1") {
		// 	var //useful variables
		// 		_text = $input.val(),
		// 		_ul   = $ul,
		// 		_str  = '<li>' + _text + '<button class="deleteButton">Delete</button> </li>';
		// 	_ul.append(_str);
		// }

		// if (selectedButton == "Save2") {
		// 	var //useful variables
		// 		_text = $input2.val(),
		// 		_ul   = $ul2,

		// 	_ul.append(_str);
		// }

	var myList = $('#ulist-'+ selectedButton),
			value = $("#txtInput-"+selectedButton).val(),
			_str  = '<li>' + value + '<button class="deleteButton">Delete</button> </li>';

			console.log(value);

			myList.append(_str);

	};

	var	addElement = function() {


		$btns.click(function() {
			var x = $(this).data("id"),
				inpt = $('#txtInput-' + x);
			if ($.trim( inpt.val()) == '')
				console.log('not cool');
			else
				createElement(x);
		});
	};

	var removeElement = function(){
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
*/

	var	init = function() {
		// addElement(),
		// removeElement();
		getNumbOfDivs(),	
		//createDivs(),
		createLi(),
		removeLi();
	};

	return {
		init: init
	};

})();

Module.init();
