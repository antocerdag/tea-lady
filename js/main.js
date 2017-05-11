

var clientes = document.getElementById("clientes");
var productos = document.getElementById("productos");
function mostrarData(){
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var email = document.getElementById("email").value;
	var direccion = document.getElementById("email").value;
	var telefono = document.getElementById("telefono").value;

	if(nombre.length == 0){
		return ("Complete el campo Nombre");
	} if (apellido.length == 0) {
		return("Complete el campo Apellido");
	} if (email.length == 0) {
		return("Complete el campo Email");
	} if (direccion.length == 0) {
		return("Complete el campo Dirección");
	}if (telefono) {}

	var infoclientes = ("<b> Nombre : </b>" + nombre + "<br>" + "<b> Apellido : </b>" + apellido + "<br>" + "<b> Email : </b>" + 
		email + "<br>" + "<b> Dirección : </b>" + direccion + "<br>" + "<b> Teléfono : </b>" + telefono);
	clientes.innerHTML = (infoclientes);
}