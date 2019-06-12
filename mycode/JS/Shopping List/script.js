var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var buttonList = document.querySelectorAll("button");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var b = document.createElement("button");
	b.classList.add("delete");
	b.appendChild(document.createTextNode("delete"));
	b.addEventListener("click", deleteListItem);
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(b);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone() {
	
	if (!event.target.classList.contains("done")) {
		console.log("toggle added!!!");
		event.target.classList.add("done");
	}
	else {
		event.target.classList.toggle("done");
	}
}

function deleteListItem() {
	var b = event.target;
	if (b.classList.contains("delete")) {
		b.parentNode.remove();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleDone);
// add event listener for each button
buttonList.forEach(function(element) {
	element.addEventListener("click", deleteListItem);
})
