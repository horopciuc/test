var btn   = $('#Save');
var input = $('#txtInput');
var list 	  = document.getElementById('list');

function myFunction() {
	var newElement = docmuent.createElement('LI');
	list.appendChild(newElement);
	newElement.innerHTML = input.val();
	// var textnode = document.createTextNode(input.val());
	// li.appendChild(textnode);
	// document.getElementById("list").appendChild(li);
}

var rmv = document.getElementByClassName('btn');
rmv.addEventListener('click', function() {
	list.parentNode.removeChild(this);
})