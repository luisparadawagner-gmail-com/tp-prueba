import { Component, OnInit } from '@angular/core';
import { Jugador } from './../clases/Jugador';

@Component({
	selector: 'app-jugador',
	templateUrl: './jugador.component.html',
	styleUrls: [ './jugador.component.css' ]
})
export class JugadorComponent implements OnInit {
	nombreJugador: string;

	jugador: Jugador = {
		nombre: 'Leo Messi',
		equipo: 'Bercelona'
	};
  
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

  jugadores: any[] = ['Messi', 'Maradona', 'Tevez'];

	constructor() {
		this.nombreJugador = 'Diego Maradona';
	}

	ngOnInit(): void {
		this.jugador.nombre = 'Diego Maradona';

		this.getJugadores();
	}

	getJugadores() {
		// llamar al servicio de jugadores
	}
}
