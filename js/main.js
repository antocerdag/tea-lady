var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var email = document.getElementById("email").value;
var direccion = document.getElementById("email").value;
var telefono = document.getElementById("telefono").value;

var clientes = document.getElementById("clientes");

function mostrarData(){
	var infoclientes = ("<b> Nombre : </b>" + nombre + "<br>" + "<b> Apellido : </b>" + apellido + "<br>" + "<b> Email : </b>" + 
		email + "<br>" + "<b> Dirección : </b>" + direccion + "<br>" + "<b> Teléfono : </b>" + telefono);
 clientes.innerHTML = (infoclientes);
}