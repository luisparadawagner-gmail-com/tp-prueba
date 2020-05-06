import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-equipo',
	templateUrl: './equipo.component.html',
	styleUrls: [ './equipo.component.css' ]
})
export class EquipoComponent implements OnInit {
	equipoPadre: string = 'Real Madrid';
	otroEquipoPadre: string;

	constructor() {}

	ngOnInit(): void {}

  // Desde este método recibo el valor desde el hijo
	onCambioEquipo(equipoNuevo) {
		this.otroEquipoPadre = equipoNuevo;
	}
}
