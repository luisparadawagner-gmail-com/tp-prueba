import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonaComponent } from './formularios/reactivos/persona.component';
import { AnimalComponent } from './formularios/template-driven/animal.component';

@NgModule({
	declarations: [ AppComponent, PersonaComponent, AnimalComponent ],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
