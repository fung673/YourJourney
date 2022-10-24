var checklist = document.getElementById("checklist");
var item = checklist.querySelectorAll("ul");
var inputs = checklist.querySelectorAll("input");
console.log(inputs)

for (var i = 0; i < item.length; i++) {
 item[i].addEventListener("click", edititem)
 inputs[i].addEventListener("blur", updateditem)
};

function edititem() {
 this.className = "edit";
 var input = this.querySelector("input")
 input.focus();
 input.setSelectionRange(0, input.value.length);

}

function updateditem() {
 if (this.value == '') {
  this.previousElementSibling.innerHTML = "type";
 }
 else
  this.previousElementSibling.innerHTML = this.value
 this.parentNode.className = "";
}


