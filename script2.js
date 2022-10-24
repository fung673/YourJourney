var total = document.getElementById("total")
var button = document.getElementById("calculate");
button.addEventListener("click", calculator);


function calculator() {
 var n1 = document.getElementById('n1');
 var n2 = document.getElementById('n2');
 var n3 = document.getElementById('n3');
 var n4 = document.getElementById('n4');
 var n5 = document.getElementById('n5');
 var list = [n1.value, n2.value, n3.value, n4.value, n5.value]
 for (var i = 0; i < list.length; i++) { if (list[i] == null || list[i] == "") { list[i] = 0 } }
 total.value = parseInt(list[0]) + parseInt(list[1]) + parseInt(list[2]) + parseInt(list[3]) + parseInt(list[4])
 total.innerHTML = total.value
}

/**function calculator() {
 var list = [];
 for (var i = 1; i <= 5; i++) {
  list[i] = (document.getElementById("n" + i).value);
 }
 var result = document.getElementById('total');
 for (var i = 1; i <= 5; i++) { if (list[i] == null || list[i] == "") { list[i] = 0 } }
 result.value = parseInt(list[1]) + parseInt(list[2]) + parseInt(list[3]) + parseInt(list[4]) + parseInt(list[5])
 total.innerHTML = result.value}**/

var num = document.querySelectorAll(".num").value







