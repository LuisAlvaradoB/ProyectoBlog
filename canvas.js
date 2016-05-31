var colorNegro="Black";
var colorGris="Grey";
var colorBlanco="White";
var escala=0.5;

//icono sobre mi
var c=document.getElementById("iconoSobreMi");
var cxt=c.getContext("2d");

cxt.fillStyle=(colorNegro);
cxt.beginPath();
cxt.arc(escala*50,escala*25,escala*20,0,Math.PI*2,true);
cxt.closePath;
cxt.fill();

cxt.fillStyle=(colorNegro);
cxt.beginPath();
cxt.arc(escala*50,escala*90,escala*40,Math.PI,Math.PI*2,false);
cxt.closePath;
cxt.fill();

//icono contacto
var c=document.getElementById("iconoContacto");
var cxt=c.getContext("2d");

cxt.fillStyle=(colorNegro);
cxt.beginPath();
cxt.arc(escala*50-10,escala*25,escala*20,0,Math.PI*2,true);
cxt.closePath;
cxt.fill();

cxt.fillStyle=(colorNegro);
cxt.beginPath();
cxt.arc(escala*50-10,escala*90,escala*40,Math.PI,Math.PI*2,false);
cxt.closePath;
cxt.fill();

cxt.fillStyle=(colorGris);
cxt.beginPath();
cxt.arc(escala*50+10,escala*25,escala*20,0,Math.PI*2,true);
cxt.closePath;
cxt.fill();

cxt.fillStyle=(colorGris);
cxt.beginPath();
cxt.arc(escala*50+10,escala*90,escala*40,Math.PI,Math.PI*2,false);
cxt.closePath;
cxt.fill();

//icono de inicio
var c=document.getElementById("iconoInicio");
var cxt=c.getContext("2d");

cxt.fillStyle=(colorNegro);
cxt.beginPath();
cxt.arc(escala*50,escala*50,escala*40,0,Math.PI*2,true);
cxt.closePath;
cxt.fill();

cxt.fillStyle=(colorBlanco);
cxt.beginPath();
cxt.arc(escala*50,escala*50,escala*30,0,Math.PI*2,true);
cxt.closePath;
cxt.fill();

cxt.fillStyle=(colorNegro);
cxt.beginPath();
cxt.arc(escala*50,escala*50,escala*20,0,Math.PI*2,true);
cxt.closePath;
cxt.fill();

//icono noticias
var c=document.getElementById("iconoNoticias");
var cxt=c.getContext("2d");

cxt.fillStyle=(colorNegro);
cxt.beginPath();
cxt.arc(escala*50,escala*50,escala*20,0,Math.PI*2,true);
cxt.closePath;
cxt.fill();

cxt.fillStyle=(colorNegro);
cxt.beginPath();
cxt.arc(escala*50,escala*50,escala*40,Math.PI,Math.PI*2,false);
cxt.closePath;
cxt.fill();
