var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d"); // creamos lienzo en 2d

// funcion que maneja la creacion de mallas
function createMalla(orientacion)
{
	var lineas = 30;
	var xi, yi, xf, yf;

	for(var l = 0; l < lineas; l++)
	{
		if(orientacion == "izquierda"){
			yi = 10 * l;
			xf = 10 * (l + 1);
			createLine("#AAF", 0, yi, xf, 300);
		}
		else if(orientacion == "derecha")
		{
			xi = 290 - l * 10;
  			yf = 300 - l * 10;
  			createLine("#AAF", xi, 0, 300, yf);
		}
	}
}

createMalla("izquierda");
// agregar lineas a los bordes izquierdo y inferior
createLine("#F05", 1, 1, 1, 300);
createLine("#F05", 1, 299, 299, 299);

createMalla("derecha");
createLine("#F05", 299, 1, 299, 299);
createLine("#F05", 1, 1, 299, 1);

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