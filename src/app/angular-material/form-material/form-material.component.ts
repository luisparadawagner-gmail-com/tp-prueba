import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

interface Bebidas {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-form-material',
	templateUrl: './form-material.component.html',
	styleUrls: [ './form-material.component.css' ]
})
export class FormMaterialComponent implements OnInit {
	bebidas: Bebidas[] = [
		{ value: '0', viewValue: 'Coca Cola' },
		{ value: '1', viewValue: 'Cerveza' },
		{ value: '2', viewValue: 'Jugo' }
	];

	color: boolean;
	colorTexto: string = 'brown';
	numero: Number = 20;
	fecha: Date = new Date();
	palabraRara: string = 'NEUQU�N_';

	constructor(private route: ActivatedRoute) {}

	numeroParam: Number;
	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			debugger;
			let tituloParam = params;
		});
	}

	cambiarColor(event) {
		if (event.checked) {
			this.color = true;
			this.colorTexto = 'blue';
		} else {
			this.color = false;
		}
	}

	selectBebida(bebida) {
		if (bebida.value === '2') {
			alert('Se seleccionó Jugo: ');
		}
	}
}
