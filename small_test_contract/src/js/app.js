function setString() {
  var someString = document.getElementById("someString").value.toString();
  web3.methods.setSomeString(someString).call();
}

function getString() {
  document.getElementById("getString").value = con.methods.someString().call();
}

window.onload = function () {
	document.getElementById("button_setString")
		.onclick = setString;
  document.getElementById("button_getString")
  	.onclick = getString;
};
