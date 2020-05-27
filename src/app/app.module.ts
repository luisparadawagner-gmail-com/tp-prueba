import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Primero registramos el modulo para formularios reactivos
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonaComponent } from './formularios/reactivos/persona.component';
import { AnimalComponent } from './formularios/template-driven/animal.component';

// Declaramos e importamos el componente en app.module para que sea visible por la aplicación
import { AlumnoComponent } from './formularios/reactivos/Alumno/alumno.component';
import { JugadorComponent } from './data-bindings/jugador/jugador.component';
import { EquipoComponent } from './data-bindings/equipo/equipo.component';
import { PadreComponent } from './comunicacion/padre-hijo/padre/padre.component';
import { HijoComponent } from './comunicacion/padre-hijo/hijo/hijo.component';
import { FormMaterialComponent } from './angular-material/form-material/form-material.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';

// Directiva
import { AppColorDirective } from './directivas/attributo-directiva-color.directive';
import { AppNumeroDirective } from './directivas/estructura-directiva.directive';

//Pipes
import { CaracteresRarosPipe } from './pipes/caracteres-raros.pipe';

@NgModule({
	declarations: [
		AppComponent,
		PersonaComponent,
		AnimalComponent,
		AlumnoComponent,
		JugadorComponent,
		EquipoComponent,
		PadreComponent,
		HijoComponent,
		FormMaterialComponent,
		AppColorDirective, // Se debe declarar la directiva importada
		AppNumeroDirective,
		CaracteresRarosPipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		MatInputModule,
		MatButtonModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatGridListModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatMenuModule
	], // Lo agregamos en imports para importar todas sus directivas
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
