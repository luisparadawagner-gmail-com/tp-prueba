import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Primero registramos el modulo para formularios reactivos
import {  FormsModule, ReactiveFormsModule } from '@angular/forms'; //se agrega la propiedad "ReactiveFormsModule"

import { AppComponent } from './app.component';
import { PersonaComponent } from './formularios/reactivos/persona.component';
import { AnimalComponent } from './formularios/template-driven/animal.component';

// Declaramos e importamos el componente en app.module para que sea visible por la aplicación
import { AlumnoComponent } from './formularios/reactivos/Alumno/alumno.component';

@NgModule({
	declarations: [ AppComponent, PersonaComponent, AnimalComponent, AlumnoComponent ],
	imports: [ BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule ], // Lo agregamos en imports para importar todas sus directivas
		//se agrega la propiedad FormsModule para el siguiente error
		//"Can't bind to 'ngModel' since it isn't a known property of 'input'."
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
