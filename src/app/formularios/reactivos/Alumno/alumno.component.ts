// Importamos el decorador Component desde angular core
import { Component } from '@angular/core';
// Importamos la directiva FormControl
import { FormControl, FormGroup } from '@angular/forms';

// Declaramos el decorador Component y le seteamos el selector y el template o vista que va a tener asociado
@Component({
	selector: 'app-alumno',
	templateUrl: './alumno.component.html'
})
export class AlumnoComponent {
	// Esta va a ser la clase del componente donde vamos a declarar todas las propiedades y métodos. Exportamos la
	// clase para que pueda ser importada desde otrolugar de la aplicación.

	// Creamos una instancia del FormControl.
	nombreControl = new FormControl('Juan'); // En el constructor inicializamos la instancia. En este caso esta vacía.

	setNombre() {
		this.nombreControl.setValue('Pedro');
	}

	alumnoForm = new FormGroup({
		nombre: new FormControl(''),
		apellido: new FormControl(''),
		edad: new FormControl(''),
		direccion: new FormGroup({
			calle: new FormControl(''),
			numero: new FormControl('')
		})
	});

	submit() {
		debugger;
		this.alumnoForm.value;

		this.alumnoForm.setValue({
			nombre: 'Diego',
			apellido: 'Maradona',
			edad: 59,
			direccion: {
				calle: 'Perez',
				numero: 49
			}
        });
        
        this.alumnoForm.patchValue({edad: 60});
	}
}
