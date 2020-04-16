import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-reactive-persona',
	templateUrl: './persona.component.html'
})
export class PersonaComponent {
    // nombreControl = new FormControl('');
    // apellidoControl = new FormControl('');
    // edadControl = new FormControl(30);

    personaForm = new FormGroup({
        nombre: new FormControl('Luis'),
        apellido: new FormControl(''),
        edad: new FormControl('')
    });

    guardarPersona() {
        debugger;
        this.personaForm.value;
        console.warn(this.personaForm.value)
    }
}
