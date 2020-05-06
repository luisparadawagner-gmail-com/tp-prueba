import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Jugador } from './../clases/Jugador';

@Component({
	selector: 'app-jugador',
	templateUrl: './jugador.component.html',
	styleUrls: [ './jugador.component.css' ]
})
export class JugadorComponent implements OnInit {
	@Input() equipoHijo: string;
	@Output() equipoHijoEvento = new EventEmitter<string>();

	equipo: string = 'Boca Juniors'; // Modificar el contenido del input y ver como se releja en la interpolación
	verJugadores: boolean = true;
	nombreJugador: string; // Propiedad

	imagenJugador: string = 'https://ugc.kn3.net/i/760x/http://pietrobellantoni.files.wordpress.com/2009/08/16563maradona411mf1.jpeg';
	anchoImg = '150';
	altoImg = '150';
	tooltip = 'El Diego';

	// Objeto de tipo Jugador
	jugador: Jugador = {
		nombre: 'Leo Messi',
		equipo: 'Bercelona',
		sueldo: 15000 //Esta propiedad es opcional
	};

	// Array de Objetos de tipo Jugador
	jugador1: Jugador[] = [
		{
			nombre: 'Leo Messi',
			equipo: 'Bercelona'
		},
		{
			nombre: 'Diego Maradona',
			equipo: 'Boca Juniors'
		},
		{
			nombre: 'Carlos Tevez',
			equipo: 'Boquita'
		}
	];

	// Array que acepta cualquier tipo de datos
	jugadores: any[] = [ 'Messi', 'Maradona', 'Tevez' ];

	constructor() {
		this.nombreJugador = 'Diego Maradona';
	}

	ngOnInit(): void {
		this.jugador.nombre = 'Diego Maradona';

		this.getJugadores();
	}

	// Desde este método le envío otro equipo al padre
	cambioEquipo() {		
		this.equipoHijoEvento.emit('Independiente');
	}

	verJugador(jugador: any) {
		alert('Jugador: ' + jugador);
	}

	getJugadores() {
		// llamar al servicio de jugadores
	}
}
