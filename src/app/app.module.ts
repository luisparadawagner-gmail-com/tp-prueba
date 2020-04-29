import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Primero registramos el modulo para formularios reactivos
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonaComponent } from './formularios/reactivos/persona.component';
import { AnimalComponent } from './formularios/template-driven/animal.component';

// Declaramos e importamos el componente en app.module para que sea visible por la aplicación
import { AlumnoComponent } from './formularios/reactivos/Alumno/alumno.component';

@NgModule({
	declarations: [ AppComponent, PersonaComponent, AnimalComponent, AlumnoComponent ],
	imports: [ BrowserModule, AppRoutingModule, ReactiveFormsModule,FormsModule ], // Lo agregamos en imports para importar todas sus directivas
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
