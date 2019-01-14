var Module = (function() {

	var // selectors & variable
		$nOfInputs = $('#nmbInputs'),
		$createBtn = $('#createBtn'),
		$divId 	   = 1,
		$elementId = 1,
		$childsId  = 1;

	var getNumbOfDivs = function() {
		$createBtn.click(function() {
			var numberOfInputs = parseInt($nOfInputs.val(), 10);
			if ( typeof numberOfInputs != "number" ||
				 numberOfInputs < 1 ) {
				console.log('negative or !numberType');
			}
			else {
				createDivs(numberOfInputs);
			}
		})
	}

	var createDivs = function(nOfDivs) {
		for (var numberOfDivs = 0; numberOfDivs < nOfDivs; numberOfDivs++) {
			// after we get the input
			// we create a div to which we assign a class & a data-attribute
			// and inside this div we add
			// an input(w/ dataAtrb), a button(w/ class&dataAtrb) and an ul(w/ class&dataAtrb)
			var strr = '<div class="divClass" id=' + $divId + ' style="float: left;"> '+
					       '<input type="text" class="inputClass" data-inputId=' + $elementId + '>' +
					       '<button class="btnClass" id=' + $elementId + ' >Save</button>' +
					       '<ul class="ulClass" data-ulId=' + $elementId + '></ul>' +
						'</div>';
			$elementId++;
			$divId++;
			$('.mainDiv').append(strr);
		}
		removeLi();
	}

	var createLi = function() {

		// through the static already existing parent,
		// we acees the dynamically created element (through it's class, ".btnClass")
		// get the value of the input, verifying if it's empty, then if not,
		// we create the element which will be appended to the sibling of the static parent,
		// in this case, we're reffering to the ".ulClass"
		$('.mainDiv').on("click", ".btnClass", function() {
			var inputValue = $(this).siblings('.inputClass').val();
			var index = $(this).data('btnid');

			var selectedValue = $("#input-"+index).val();

			if ($.trim(inputValue) == "") {
				console.log("orice inafara de asta");
			}
			else {
				var liToBeAdded = '<li class="liClass" data-liId=' + $childsId + '>' + inputValue +
								  	'<button class="delBtnClass" id=del' + $childsId + '>Delete</button'+
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

		// $('body').on("click", ".delBtnClass", function() {
		// 	$(this).parent().remove();
		// })
		$('.btnClass').each(function() {
			var index = $(this).attr("id");
			$("#del"+index).on("click", function() {
				console.log("clicked save");
			})
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
