alert("Vas a realizar una serie de preguntas iniciales sobre fechas históricas para saber tu nivel en historia");

var puntos = 0;

var a = parseInt(prompt("Descubrimiento de América"));
if (a == 1492) {
    document.write("+10p ");
    puntos = puntos + 10;
} else {
    document.write("-5p ");
    puntos = puntos - 5;
}

var b = parseInt(prompt("Caída del I.R. de Occidente"));
if (b == 476) {
    document.write("+10p ");
    puntos = puntos + 10;
} else {
    document.write("-5p ");
    puntos = puntos - 5;
}

var c = parseInt(prompt("Revolución Francesa"));
if (c == 1786) {
    document.write("+10p ");
    puntos = puntos + 10;
} else {
    document.write("-5p ");
    puntos = puntos - 5;
}

var d = parseInt(prompt("Inicio de la Segunda Guerra Mundial"));
if (d == 1939) {
    document.write("+10p ");
    puntos = puntos + 10;
} else {
    document.write("-5p ");
    puntos = puntos - 5;
}

var e = parseInt(prompt("Entrada de los musulmanes a la P.I."));
if (e == 711) {
    document.write("+10p ");
    puntos = puntos + 10;
} else {
    document.write("-5p ");
    puntos = puntos - 5;
}

var f = parseInt(prompt("Inicio de la Guerra Civil Española"));
if (f == 1936) {
    document.write("+10p ");
    puntos = puntos + 10;
} else {
    document.write("-5p ");
    puntos = puntos - 5;
}

var g = parseInt(prompt("Inicio de la Primera Guerra Mundial"));
if (g == 1914) {
    document.write("+10p ");
    puntos = puntos + 10;
} else {
    document.write("-5p ");
    puntos = puntos - 5;
}

document.write("<br><br><strong>Puntaje total: " + puntos + " puntos</strong>");