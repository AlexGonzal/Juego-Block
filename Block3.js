//obtener contexto
var canva = document.getElementById("dibujo");
var ctx = canva.getContext("2d");

document.addEventListener("keydown",movimiento);
document.addEventListener("keyup",movimiento2);

//Definición de Variables
var x = 200;
var y = 100;

var dx = 5;
var dy = 5;

var radio = 10;

var ancho_paleta = 60;
var grueso_paleta = 10;

var derecha = false;
var izquierda= false;

var t =(canva.width/2)-(ancho_paleta/2);
var u =canva.height - grueso_paleta;


//Funciones
function dibujar() 
{
	// body...
	ctx.clearRect(0,0,canva.width,canva.height);
	paleta();
	if (x+10>canva.width  || x-10<0)
	{
		dx=-dx;
	}
	if (y+10>canva.height  || y-10<0)
	{
		dy=-dy;
	}
	if (derecha == true && t<=canva.width)
	{
		t=t+3;
	}
	if (izquierda == true  && t>=0)
	{
		t=t-3;
	}
	ctx.beginPath();
    ctx.arc(x,y,radio,0,Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    x+=dx;
    y+=dy;
}

function paleta()
{
	ctx.beginPath();
	ctx.rect(t,u,ancho_paleta,grueso_paleta);
	ctx.fillStyle = "red";
	ctx.fill();
    ctx.closePath();
}

function movimiento(e)
{
	if(e.keyCode == 39)
	{
		derecha = true;
	}
	if(e.keyCode == 37)
	{
		izquierda = true;
	}
}

function movimiento2(e)
{
	if(e.keyCode == 39)
	{
		derecha = false;
	}
	if(e.keyCode == 37)
	{
		izquierda = false;
	}
}
setInterval(dibujar,10);
