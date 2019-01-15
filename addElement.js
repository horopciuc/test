var Module = (function() {

	var // selectors & variable
		$nOfInputs = $('#nmbInputs'),
		$createBtn = $('#createBtn'),
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
			removeLi();
		})
	}

	// after we get the input
	// we create a div to which we assign a class & a data-attribute
	// and inside this div we add
	// an input(w/ dataAtrb), a button(w/ class&dataAtrb) and an ul(w/ class&dataAtrb)
	var createDivs = function(nOfDivs) {
		for (var numberOfDivs = 0; numberOfDivs < nOfDivs; numberOfDivs++) {
			var strr = '<div class="divClass" id="div-' + $elementId + '" style="float: left;"> '+
					       '<input type="text" class="inputClass" id="input-' + $elementId + '">' +
					       '<button class="btnClass" id=' + $elementId + ' >Save</button>' +
					       '<ul class="ulClass" id="container-' + $elementId + '"></ul>' +
						'</div>';
			$elementId++;
			$('.mainDiv').append(strr);
		}
	}

	// through the static already existing parent,
	// we acees the dynamically created element (through it's class, ".btnClass")
	// get the value of the input, verifying if it's empty, then if not,
	// we create the element which will be appended to the sibling of the static parent,
	// in this case, we're reffering to the ".ulClass"
	var createLi = function() {
		$('.mainDiv').on("click", ".btnClass", function() {
			var indexVal = 1*($(this).attr("id"));
			var inputVal = $('#input-' + indexVal).val();
			if ($.trim(inputVal) == "") {
				console.log("orice inafara de asta");
			}
			else {
				var liToBeAdded = '<li class="liClass" id="li-' + $childsId + '">' + inputVal +
								  	'<button class="delBtnClass" id="asd' + $childsId + '">Delete</button'+
								  '</li>';
				$childsId++;
				$('#container-' +indexVal).append(liToBeAdded);
			}
		})
	}

	// on click event of the delete button,
	// we delete the parent of the respective button,
	// which is the li element containing him
	var removeLi = function() {
			$('.btnClass').each(function() {
				var index = parseInt($(this).attr("id"));
				$('#container-' + index).on("click", ".delBtnClass", function() {
					switch(index) {
						case 1:
							$(this).parent().remove();
							console.log("pe case 1");
							break;
						case 3:
							$(this).parent().remove();
							console.log('removed element with container ' +index);
							console.log("pe case 3");
							break;
						default:
							$(this).parent().remove();
							console.log("pe case default");
							break;
					}
				});
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
