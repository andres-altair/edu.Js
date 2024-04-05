/*piramide*/
function piramide() {
	let texto = "*";
	let fila = prompt("escribe los numeros de filas ")
	for (let i = 0; i <= fila; i++) {
		for (let j = 0; j <= i; j++) {
			texto += "<br>";
		}
	} document.getElementById("p2").innerHTML = texto;
}





/* valor absoluto*/
function numero() {
	let num1 = prompt("escribe un numero");
	let num2;
	if (num1 < 0) {
		num2 = num1 * -1;
	} else {
		num2 = num1;
	}
	//document.write(num2.);
	// console.log(num2);
	document.getElementById("p2").innerHTML = (num2.toString());
}




/* factorizar*/
function factorizar() {
	let numPrimo = [2, 3, 5, 7, 11, 13, 17, 23, 31, 37, 41];
	let numPrimoRepetido = [];
	let guardado = [1];
	let numResto = 0;
	let numIntro = prompt("escribe un numero");
	for (let i = 0; i < numPrimo.length; i++) {
		let numRE;
		while (numIntro % numPrimo[i] != 0) {
			numRE++
			numResto = numIntro % numPrimo[i];
		}
		numPrimoRepetido.push(numRE);
		guardado.push(numPrimo[i]);
		/*if( numIntro%numPrimo[i] ==0){
			guardado.push(numPrimo[i]);
		}else{
			numResto=numIntro%numPrimo[i]
		}*/
	}
	if (numPrimo.length > 0) {
		document.getElementById("p2").innerHTML = ("los numeros primos son " + guardado.join() +
			" se han repetido respectivamente " + numPrimoRepetido.join() +
			" el resto es " + numResto.toString());
	} else {
		document.getElementById("p2").innerHTML = ("el numero " + numIntro.toString()
			+ " no se pude factorizar o no tenemos suficiente datos");
	}
}






function compara() {
	/*para recibir fecha se puede hacer de varias maneras, os dejo 2, una simple y otra algo más compleja*/
	/*simple*/
	const dia = prompt("introduce el día");
	const mes = prompt("introduce el mes");
	const anyo = prompt("introduce el año");
	const fecha1 = new Date(anyo, (mes-1), dia);
	/*compleja*/
	let texto = prompt("introduzca la fecha (yyyy/MM/dd)");
	texto = texto.split('/'); /*el string es una cadena y lo que hacemos es crear un array separando por el caracter / */
	/*no hay una manera mejor o peor, simplemente usad la que más cómoda os resulte*/
	const fecha2 = new Date(texto[0], (texto[1]-1), texto[2]); /*Le restamos uno a los meses pues Enero es el 0 y Diciembre el 11 en Javascript */
	
	let dif;
/*Como no puede haber fechas negativas tenemos está alternativa */
	if (fecha2.getTime() - fecha1.getTime() > 0)
		dif = new Date(fecha2.getTime() - fecha1.getTime());
	else
		dif = new Date(fecha1.getTime() - fecha2.getTime());
console.log(dif);
/*o bien dif = new Date (Math.abs (fecha1.getTime()-fecha2.getTime() ) ) */
	const danyo = dif.getFullYear() - 1970; /*Los milisegundos son contados desde el 1/1/1970 por lo que será necesario restar dichos valores también */
	const ddia = dif.getDate() - 1;
	console.log (dif.getMonth())
	alert ("La diferencia es:'\n'Años: "+danyo+"'\n'Meses:"+dif.getMonth()+"'\n'Dias:"+ddia)/*Recordad el carácter escape para los saltos de línea en alert y console.log. */
}


