// Importamos el decorador Component desde angular core
import { Component } from '@angular/core';
// Importamos la directiva FormControl
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';

// Declaramos el decorador Component y le seteamos el selector y el template o vista que va a tener asociado
@Component({
	selector: 'app-alumno',
	templateUrl: './alumno.component.html',
	styleUrls: [ './alumno.component.css' ]
})
export class AlumnoComponent {
	// Esta va a ser la clase del componente donde vamos a declarar todas las propiedades y métodos. Exportamos la
	// clase para que pueda ser importada desde otrolugar de la aplicación.

	// Creamos el constructor de la clase
	// Inyectamos el FormBuilder en el constructor
	constructor(private fb: FormBuilder) {}

	// Creamos una instancia del FormControl.
	nombreControl = new FormControl('Juan'); // En el constructor inicializamos la instancia. En este caso esta vacía.

	// setNombre() {
	// 	this.nombreControl.setValue('Pedro');
	// }

	alumnoForm = this.fb.group({
		nombre: [ 'Pedro', Validators.required ],
		apellido: [ '' ],
		edad: [ '' ],
		direccion: this.fb.group({
			calle: [ '' ],
			numero: [ '' ]
		}),
		telefonos: this.fb.array([ this.fb.control('') ])
	});

	get telefonos() {
		return this.alumnoForm.get('telefonos') as FormArray;
	}

	agregarTelefono() {
		this.telefonos.push(this.fb.control(''));
	}

	submit() {
		debugger;
		this.alumnoForm.value;
		//this.alumnoForm.value(); antes estaba colocado de esta forma, por lo se tomaba como función

		this.alumnoForm.setValue({
			nombre: 'Diego',
			apellido: 'Maradona',
			edad: 59,
			direccion: {
				calle: 'Perez',
				numero: 20//se agrega la propiedad Numero, no agregada anteriormente
			},
			telefonos : this.telefonos.value
		});

		this.alumnoForm.patchValue({ edad: 60 });
	}
}
