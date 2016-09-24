var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d"); // creamos lienzo en 2d
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");


// agregando y disparando evento cuando ocurra
boton.addEventListener("click",dibujoPorClick);

// funcion para dibujar por click
function dibujoPorClick()
{
	numeroLineas = parseInt(texto.value);
	createMalla("izquierda",numeroLineas);
	// agregar lineas a los bordes izquierdo y inferior
	createLine("#F05", 1, 1, 1, 300);
	createLine("#F05", 1, 299, 299, 299);

}
// funcion que maneja la creacion de mallas
function createMalla(orientacion,nlineas)
{
	var lineas = nlineas;
	var xi, yi, xf, yf;
	var espacio = ancho / lineas;

	for(var l = 0; l < lineas; l++)
	{
		if(orientacion == "izquierda"){
			yi = espacio * l;
			xf = espacio * (l + 1);
			createLine("#AAF", 0, yi, xf, 300);
		}
		else if(orientacion == "derecha")
		{
			xi = 290 - l * espacio;
  			yf = 300 - l * espacio;
  			createLine("#AAF", xi, 0, 300, yf);
		}
	}
}

/*createMalla("derecha");
createLine("#F05", 299, 1, 299, 299);
createLine("#F05", 1, 1, 299, 1);*/

// funcion que maneja la creacion de lineas
function createLine(color,xInicial, yInicial, xFinal, yFinal)
{
	lienzo.beginPath(); // empezar a dibujar un camino
	lienzo.strokeStyle = color; // decidimos el color de la linea
	lienzo.moveTo(xInicial,yInicial); // mueve el lapiz a donde va a arrancar la linea
	lienzo.lineTo(xFinal,yFinal);  // traza la linea hasta (200,200) 
	lienzo.stroke(); // dibujo la linea y la hace visible en el lienzo
	lienzo.closePath(); // terminar de dibujar
}