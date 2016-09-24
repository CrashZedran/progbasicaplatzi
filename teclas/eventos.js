var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39

};

var cuadrito =  document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = cuadrito.width / 2;
var y = cuadrito.height / 2;

createLine("red", 149, 149, 151, 151, papel);

document.addEventListener("keyup",dibujarTeclado);

function dibujarTeclado(evento)
{
	var colorcito = "blue";
	var movimiento = 10;
	switch(evento.keyCode)
	{
		case teclas.UP:
			createLine(colorcito, x, y, x, y - movimiento, papel);
			y = y - movimiento;
			console.log("Vamos pa arriba");
		break;
		case teclas.DOWN:
			createLine(colorcito, x, y, x, y + movimiento, papel);
			y = y + movimiento;
			console.log("Vamos pa abajo");
		break;
		case teclas.LEFT:
			createLine(colorcito, x, y, x - movimiento, y, papel);
			x = x - movimiento;
			console.log("Vamos pa la derecha");
		break;
		case teclas.RIGHT:
			createLine(colorcito, x, y, x + movimiento, y, papel);
			x = x + movimiento;
			console.log("Vamos pa la izquierda");
		break;

	}
}

function createLine(color,xInicial, yInicial, xFinal, yFinal, lienzo)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(xInicial,yInicial); 
	lienzo.lineTo(xFinal,yFinal);   
	lienzo.stroke();
	lienzo.closePath();
}