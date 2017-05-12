var clientes = document.getElementById("clientes");
var productos = document.getElementById("productos");
function mostrarData(){
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var email = document.getElementById("email").value;
	var direccion = document.getElementById("email").value;
	var telefono = document.getElementById("telefono").value;

	
	//var value1 = document.getElementsByTagName("option")[0].value
	//var value2 = document.getElementsByTagName("option")[1].value
	//var value3 = document.getElementsByTagName("option")[2].value
	//var value4 =document.getElementsByTagName("option")[3].value
	var checkbox = document.getElementById("checkbox");

	var infoclientes = ("<b> Nombre : </b>" + nombre + "<br>" + "<b> Apellido : </b>" + apellido + "<br>" + "<b> Email : </b>" + 
	email + "<br>" + "<b> Dirección : </b>" + direccion + "<br>" + "<b> Teléfono : </b>" + telefono);
	


	if((nombre.length == 0) || (apellido.length == 0) || (email.length == 0) || (direccion.length == 0) || (telefono.length == 0) ){
		alert ("Complete todos los campos");
	} else{
		clientes.innerHTML = (infoclientes);
	}
	
	

	
}

function opciones(){
	var select=document.getElementsByTagName("select");
	for (var i=0; i<select.length; i++){
        if(select[i].value=="0"){
            alert("Debe elegir opción");}
	}
}