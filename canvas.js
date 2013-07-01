// Son las medidas que tendrá nuestro campo de juego.
// Puedes probar a cambiarlas para ver los resultados.
var CANVAS_WIDTH = 760;
var CANVAS_HEIGHT = 480;

// Obtenemos el elemento <canvas> que esta en nuestro page.html
var canvas = document.getElementById('canvas');
// Cargamos el contexto 2d del canvas
// Que nos permite dibujar sobre el
var context = canvas.getContext('2d');

// Asignamos el tamaño que definimos como variables al inicio
// a nuestro canvas.
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// Esta es nuestra "clase" Juego, la cual se encargará
// de renderizar nuestro canvas en pantalla.
var Game = function()
{

	// Carga la imagen para ser mostrada
	var image1 = new Image();
	image1.src = "resources/simple.jpg";

	// Carga imagen de animación
	var image2 = new Image();
	image2.src = "resources/multiple.jpg";
	var srcX = 0;
	var srcY = 0;
	var counter = 1;

	// Método que inicializa nuestro thread
	this.init = function()
	{
		requestAnimFrame(game.thread);
	};

	this.draw = function()
	{
		context.save();

		// Limpia el lienzo en pantalla
		context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		// Dibuja el fondo de color plomo (Repasar colores hexadecimales y RGBA)
		context.fillStyle = "#CCCCCC";
		context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		// Dibuja una recta (sólo contorno) de color blanco
		context.strokeStyle = "#FFFFFF";
		context.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		// Dibuja un cuadrado de color rojo en el punto 100, 100 y de ancho 200 y alto 200
		context.fillStyle = "#FF0000";
		context.fillRect(100, 100, 200, 200);

		// Dibuja una línea de color negro
		context.beginPath();
		context.strokeStyle = "#000000";
		context.moveTo(500,100);
		context.lineTo(600,300);
		context.lineWidth = 1;
		context.stroke();
		context.closePath();

		// Dibuja un círculo de color morado.
		context.beginPath();
		context.arc(40, 200, 20, 0, Math.PI * 2, false);
		context.fillStyle = "#FF00FF";
		context.fill();
		context.closePath();

		// Dibuja la imagen de arriba a la izquierda
		context.drawImage(image1, 0, 0, image1.width, image1.height);

		// Dibuja la animación simple de megaman.
		// (imagen, puntoImagenCorteX,puntoImagenCorteY, ancho corte, alto corte, puntoX canvas, puntoY canvas, mismo ancho, mismo alto)
		context.drawImage(image2, srcX * image2.width / 4, srcY, image2.width / 4, image2.height / 2, 320, 100, image2.width / 4, image2.height / 2);

		// Dibujael texto de HelloWorld en el punto 300, 50
		context.fillStyle = "#000000";
		context.font = 'italic 40pt Calibri';
		// context.fon = 'bold 30px Arial';
		// verdana, arial, serif, sans-serif, cursive, fantasy, monospace
		context.textAlign = 'center';
		context.textBaseline = 'middle';
      	// context.fillText('Hello World!', 150, 100);

      	context.lineWidth = 3;
      	// stroke color
      	context.strokeStyle = 'blue';
      	context.strokeText('Hello World!', 300, 50);

      	// Dibuja el texto de HTML Canvas Shadow con sombras.
		context.shadowOffsetX = 10;
		context.shadowOffsetY = 10;
		context.shadowBlur    = 2;
		context.shadowColor   = "#666666";

		context.fillStyle = "#000066";
		context.font = "30px Arial";
		context.fillText("HTML5 Canvas Shadow", 200,340);

		context.restore();
	};

	this.update = function(dt)
	{
		// Para hacer la animacion de un spritesheet.
		counter++;
		if(counter % 10 == 0)
		{
			srcX++;
			counter = 1;
			if(srcX > 3)
				srcX = 0;
		}
	};

	// Nuestro hilo que ejecuta el dibujado en pantalla
	// La secuencia de actualización (update)
	// En el update normalmente se coloca:
	// - Manejo de input (teclado, mouse, etc)
	// - Colisiones
	// - Inteligencia Artificial
	// - Acciones a sprites u otros objetos.
	// - Manejo de red (en algunas ocasiones, es preferible tenerlo en otro hilo)
	// - Entre otros.
	// Y llamamos nuevamente a nuestro thread para que ejecute el juego.
	this.thread = function()
	{

		var dt = 0;

		game.draw();
		game.update(dt);
		requestAnimFrame(game.thread);
	};

};

// Instanciamos nuestra clase Juego para poder acceder a sus métodos públicos.
var game = new Game();
// Iniciamos el juego, mirar que el método init inicializa valores y ejecuta el "thread"
game.init();