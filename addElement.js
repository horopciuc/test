var Module = (function() {

	var // selectors & variable
		$nOfInputs = $('#nmbInputs'),
		$createBtn = $('#createBtn'),
		$elementId = 1,
		$childsId  = 1;

	// after
	var getNumbOfDivs = function() {
		$createBtn.click(function() {
			var numberOfInputs = parseInt($nOfInputs.val());
			if (((typeof numberOfInputs) != "number") ||
				  numberOfInputs < 1 || $.trim(numberOfInputs) == "") {
				console.log("mai mare ca 0, please!");
			}
			else {
				createDivs(numberOfInputs);
			}
		})
	}

	var createDivs = function(nOfDivs) { 
		console.log(nOfDivs);
		for (var numberOfDivs = 0; numberOfDivs < nOfDivs; numberOfDivs++) {
			// after we get the input
			// we create a div to which we assign a class & a data-attribute
			// and inside this div we add 
			// an input(w/ dataAtrb), a button(w/ class&dataAtrb) and an ul(w/ class&dataAtrb)
			var strr = '<div class="divClass" data-divId=' + $elementId + ' style="float: left;"> '+
					       '<input type="text" class="inputClass" data-inputId=' + $elementId + '>' +
					       '<button class="btnClass" data-btnId=' + $elementId + ' >Save</button>' +
					       '<ul class="ulClass" data-ulId=' + $elementId + '></ul>' +
						'</div>';
			$elementId++;
			$('body').append(strr);
		}
	}

	var createLi = function() {

		// through the static already existing parent,
		// we acees the dynamically created element (through it's class, ".btnClass")
		// get the value of the input, verifying if it's empty, then if not,
		// we create the element which will be appended to the sibling of the static parent,
		// in this case, we're reffering to the ".ulClass"
		$(document).on("click", ".btnClass", function() {
			var inputValue = $(this).siblings('.inputClass').val();
			if ($.trim(inputValue) == "") {
				console.log("orice inafara de asta");
			}
			else {
				var liToBeAdded = '<li class="liClass" data-liId=' + $childsId + '>' + inputValue +
								  	'<button class="delBtnClass" data-delBtn=' + $childsId + '>Delete</button'+ 
								  '</li>';
				$childsId++;
				$(this).siblings('.ulClass').append(liToBeAdded);
			}
		})
	}

	// on click event of the delete button,
	// we delete the parent of the respective button,
	// which is the li element containing him
	var removeLi = function() {
		$(document).on("click", ".delBtnClass", function() {
			$(this).parent().remove();
		})
	}
	
	var	init = function() {
		getNumbOfDivs(),	
		createLi(),
		removeLi();
	};

	return {
		init: init
	};

})();

Module.init();
