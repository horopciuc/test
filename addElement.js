var btn   = document.getElementById('Save');

function myFunction() {
	var text = document.getElementById('txtInput').value;
	var ul = document.getElementById('ulist');
	var li = document.createElement('li');
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	button.className = "deleteButton";
	li.appendChild(document.createTextNode(text));
	li.appendChild(button);
	ul.appendChild(li);
}

$(document).on('click','.deleteButton', function() {
    $(this).parent().remove();    
});