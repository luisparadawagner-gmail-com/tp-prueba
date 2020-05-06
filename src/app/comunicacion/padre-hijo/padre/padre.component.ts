import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-padre',
	templateUrl: './padre.component.html',
	styleUrls: [ './padre.component.css' ]
})
export class PadreComponent implements OnInit {
	varPadre: string = 'Vengo del componente padre';
	varPadreAlias: string = 'Vengo del padre usando un alias en el componente hijo';

	apodo: string;

	constructor() {}

	ngOnInit(): void {}

	onApodo(apodo) {
    debugger;
		this.apodo = apodo;
	}
}
