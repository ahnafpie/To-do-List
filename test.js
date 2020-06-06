var input = document.getElementById("input");
var button = document.getElementById("button");
var div = document.querySelector("div");

function inputLength() {
  return input.value.length;
}

function createItem() {
  var itemDiv = document.createElement("div");
  itemDiv.classList.add("item");
  div.appendChild(itemDiv);
  itemDiv.addEventListener("click", function () {
    itemName.classList.toggle("done");
  });
  var itemName = document.createElement("div");
  itemName.appendChild(document.createTextNode(input.value));
  itemName.classList.add("itemText");
  itemDiv.appendChild(itemName);
  var removeButton = document.createElement("button");
  removeButton.appendChild(document.createTextNode("X"));
  removeButton.classList.add("remove");
  itemDiv.appendChild(removeButton);
  removeButton.addEventListener("click", function () {
    itemDiv.remove();
  });
  input.value = "";
}

function addListItemClick() {
  if (inputLength() > 0 && /\S/.test(input.value)) {
    createItem();
  } else {
    input.value = "";
  }
}
function addListItemKey(event) {
  if (inputLength() > 0 && event.keyCode === 13 && /\S/.test(input.value)) {
    createItem();
  }
}
button.addEventListener("click", addListItemClick);
input.addEventListener("keypress", addListItemKey);
