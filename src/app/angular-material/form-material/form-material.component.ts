import { Component, OnInit } from '@angular/core';

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

	constructor() {}

	ngOnInit(): void {}

	cambiarColor(event) {
		if (event.checked) {      
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
