
var cargarPagina = function () {
 cargarLista();
};


var cargarLista = function (){
	var api = 'http://laboratoria.cuadra.co:9339/api/v1/students/';

$.getJSON(api, function (response) {
    var alumna = response;
	crearAlumnaNueva (alumna);
  });
 };


var crearAlumnaNueva = function (alumnas) {	
var $ol = $("<ol/>");
var $almacenAlumnas = $("#almacenAlumnas");
	
alumnas.forEach( function (alumna){
/*creamos*/
var $li = ("<li/>");
var $palomita = ("<input/>");
	$palomita.attr("type", "checkbox");
	$li.text(alumna.name);
	$li.append($palomita);
	$ol.append($li);
	});
$almacenAlumnas.append($ol);
}

$(document).ready(cargarPagina);