var api = 'http://laboratoria.cuadra.co:9339/api/v1/students/';

var cargarPagina = function () {
 cargarLista();
};


var cargarLista = function (){
	
$.getJSON(api, function (alumnas) {
	alumnas.forEach(crearAlumnaNueva);
  });
 };


var crearAlumnaNueva = function (alumna) {	
   
	    console.log(alumna);
	var apellidoMaterno = alumna.mLastName;
	  console.log(apellidoMaterno);
	var apellidoPaterno =alumna.pLastName;
	var alumna = alumna.name;
	
	
	
	
	    console.log(apellidoMaterno);
	
var $ul = $("<ul/>");
var $almacenAlumnas = $("#almacenAlumnas");
var $palomita = $("<input/>");
	$palomita.attr("type", "checkbox");
	var $li = $("<li/>");
	
	$li.text(alumna + " "+ apellidoMaterno + " " + apellidoPaterno );
	$li.append($palomita);
	$ul.append($li);
	$almacenAlumnas.append($ul);
	};



$(document).ready(cargarPagina);