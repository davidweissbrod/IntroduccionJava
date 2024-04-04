function calcularEdad(fecha){
    prompt("Ingrese su nombre");
    prompt("Ingrese su apellido");
    const fechaActual = new Date('2023-09-12');
    let fechaCumple = new Date(fecha);
    let edad = 0;
    if(mes == fechaActual.getMonth() + 1){
        edad = fechaCumple.getFullYear() - fechaActual.getFullYear();
    }
    else if(mes < fechaActual.getMonth() + 1){
        edad = fechaCumple.getFullYear() - fechaActual.getFullYear();
        edad = edad - 1
    }
    console.log("Tiene " + edad + " años");
    return edad;
}

function tirandoFruta(){
    const frutas = [
        "Peras",
        "Manzanas",
        "Bananas",
        "Arandanos",
        "Sandia",
        "Frambuesa",
        "Frutilla",
        "Kiwi",
        "Anana",
        "Durazno"
    ]
    const mostFrutas = document.getElementById("frutas");
    mostFrutas.innerHTML = frutas;

    let frutaElegida = prompt("Elegi una fruta");
    const busqueda = frutas.find(fruta => fruta = frutaElegida);
    if(busqueda){
        console.log('Si hay ' + fruta);
    }
    else{
        console.log('No hay ' + fruta);
    }
}

function comparando(){
    if(10 == '10') console.log('Es igual');
    else console.log('No es igual'); // da esto
    if(10 === '10') console.log('Es igual'); // da esto
    else console.log('No es igual');
    // La diferencia es que uno no compara el tipo de dato (el primero) y el otro si (el segundo) 

    let num = 10.6;
    console.log(typeof num);
    // tipo number

    if(true == 1) console.log('Es igual');
    else console.log('No es igual');
    // 1 = true y 0 = false
}

function yoObjeto(){
    const ciudad = {
        nombre: "Buenos Aires",
        fechaFundacion: "1580-06-11",
        poblacion: 3120612,
        extension: 200
    }
}

function dobleElementos(arrNums){
    const arrNuevo = []
    for(const num of arrNums){
        numDoble = num*2;
        arrNuevo.push(numDoble);
    }
}

function trianguloAsteriscos(numPisos) {
    for (let i = 0; i < numPisos; i++){
        let car = '';
        for (let j = 0; j < i + 1; j++) {
            car = car + '*';
        }
        console.log(car)
    }

    for(let i = 0; i < numPisos; i++){
        for(let j = numPisos - 1 - i; j > 0; j--){
            console.log('-');
        }
        for(let x = 0; x < i + 1; x++){
            console.log('*');
        }
        for(let t = numPisos - 1 - i; t > 0; t--){
            console.log('-');
        }
    }
}

function nombresConA(){
    const ingreso = prompt('Ingrese nombres separados por una coma (,)');
    const listaNombres = ingreso.split(', ');
    if(listaNombres.startsWith('a') || listaNombres.startsWith('A')){
        const mostrar = document.getElementById('nombres');
        mostrar.innerHTML = listaNombres;
    }
}

function remplazarPalabras(){
    let ingreso = prompt('Ingrese una frase');
    let palabraACambiar = prompt('Que palabra quiere remplazar');
    let remplazo = prompt('Que palabra quiere usar para remplazar');
    const nuevaFrase = ingreso.replace(palabraACambiar, remplazo);
    const mostarNuevaFrase = document.getElementById('nueva-frase');
    mostarNuevaFrase.innerHTML = nuevaFrase;
}

function cortarTexto(){
    let cadena = prompt('Ingrese una frase');
    let num = prompt('Ingrese un numero');
    let nuevaCadena = cadena.slice(0, num);
    const mostarCadena = document.getElementById('cadena-cortada');
    mostarCadena.innerHTML = nuevaCadena;
}

function separador(){
    let ingreso = prompt('Ingresa palabras separadas por una coma');
    let cambio = ingreso.replaceAll(',', '-');
    const mostrarCambio = document.getElementById('separador');
    mostrarCambio.innerHTML = cambio; 
}

function calcularRecaudacion(){
    const listaObjetos = prompt('Ingrese los objetos y su precio separados por una coma (,)');
    const arrObjetos = listaObjetos.split(",");
    let recaudacion = 0;
    for(let i = 0; i < arrObjetos.length; i++){
        const objeto = arrObjetos[i].trim().split(':');
        let suma = parseFloat(arrObjetos[1]);
        recaudacion += suma;
    }
    const mostrarRecaudacion = document.getElementById("recaudacion");
    mostrarRecaudacion.innerHTML = recaudacion;
}