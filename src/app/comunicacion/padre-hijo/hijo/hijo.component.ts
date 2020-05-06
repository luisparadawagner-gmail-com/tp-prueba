import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-hijo',
	templateUrl: './hijo.component.html',
	styleUrls: [ './hijo.component.css' ]
})
export class HijoComponent implements OnInit {
	@Input() varHijo: string;
	@Input('aliasHijo') varHijo2: string;

	@Output() apodo = new EventEmitter<string>();

	nombre = new FormControl('Lucho');
	imagen: string = 'input-diagram-target-source.svg';

	constructor() {}

	ngOnInit(): void {}

	ponerApodo(nombre: FormControl) {
		debugger;
		if (nombre.value === 'Juan') {
			this.apodo.emit('Pepe');
		} else {
			this.apodo.emit('No se el apodo');
		}
	}
}
