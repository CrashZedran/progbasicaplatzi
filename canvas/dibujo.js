var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d"); // creamos lienzo en 2d
//console.log(lienzo);
var lineas = 30;
var l = 0;
var yi, xf;

while(l < lineas)
{
	yi = 10 * l;
	xf = 10 * (l + 1);
	createLine("#AAF", 0, yi, xf, 300);
	l = l + 1;
}

// agregar lineas a los bordes izquierdo y inferior
createLine("#F05", 1, 1, 1, 300);
createLine("#F05", 1, 299, 299, 299);

//createLine("red",100,100,200,200);
//createLine("blue",50,20,100,200);

function createLine(color,xInicial, yInicial, xFinal, yFinal)
{
	lienzo.beginPath(); // empezar a dibujar un camino
	lienzo.strokeStyle = color; // decidimos el color de la linea
	lienzo.moveTo(xInicial,yInicial); // mueve el lapiz a donde va a arrancar la linea
	lienzo.lineTo(xFinal,yFinal);  // traza la linea hasta (200,200) 
	lienzo.stroke(); // dibujo la linea y la hace visible en el lienzo
	lienzo.closePath(); // terminar de dibujar
}