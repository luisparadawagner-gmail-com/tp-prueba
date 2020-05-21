import { Component, OnInit, ViewChild } from '@angular/core';
import { HijoComponent } from './../hijo/hijo.component';

@Component({
	selector: 'app-padre',
	templateUrl: './padre.component.html',
	styleUrls: [ './padre.component.css' ]
})
export class PadreComponent implements OnInit {
	@ViewChild(HijoComponent) private viewChildHijo: HijoComponent;

	varPadre: string = 'Vengo del componente padre';
	varPadreAlias: string = 'Vengo del padre usando un alias en el componente hijo';

	apodo: string;

	nombreMayuscula: string = 'diego maradona';

	constructor() {}

	ngOnInit(): void {}

	onApodo(apodo) {
		debugger;
		this.apodo = apodo;
	}

	llamarViewChildHijo(pajaro) {
		this.viewChildHijo.vieneDelPadre(pajaro);
	}
}
