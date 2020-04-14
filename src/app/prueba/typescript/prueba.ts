// node -v  Versión de node
// tsc -v  Ver versión de typescript

import { i18nMetaToDocStmt } from '@angular/compiler/src/render3/view/i18n/meta';

// npm install -g typescript "Instala typescript"

// Clase que viene Formularios de Angular

// Tipos de Datos
// tsc nombrearchivo.ts transpila a código javascript

var numero; // No tiene ámbito

let numero1; // Si tiene ámbito

let num: Number = 10;
let texto: string = 'Hola Angular';
let verdadero: boolean = true;
let fecha: Date = new Date();
let nulo: null = null;
let indefinida: undefined = undefined;

let arrayTipo: Number[] = []; // Esto es un array vacío
let arrayTipo2: Array<string> = [ 'Juan', 'Pedro', 'Pepe' ];
let arrayAny: Array<any> = [ 29, 'Pedro', true ];

let tipoAny: any; // Este tipo de dato acepta todos los tipos de datos

// Interface
interface IPersona {
	nombre: string;
	apellido: string;
	edad: Number;
	fechaNacimiento?: Date; // Esta propiedad es opcional agregando el signo ?
}

class Persona {
	nombre: string;
	apellido: string;
	edad: Number;

	constructor() {}
}

let persona = new Persona();
persona.nombre = 'Diego';
console.log("Nombre Diego: ", persona.nombre);

function prueba() {
	// Objeto
	let persona: IPersona = {
		nombre: 'José',
		apellido: 'Pérez',
		edad: 20
	};
	console.log('Persona Nombre: ', persona.apellido);
}

console.log('Número: ', num);
console.log('Texto: ', texto);
console.log('Verdadero: ', verdadero);

console.log('Array: ', arrayTipo2[1]);
