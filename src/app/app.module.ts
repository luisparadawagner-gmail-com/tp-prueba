import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { PruebaAutomaticaComponent } from './prueba-automatica/prueba-automatica.component';
import { PruebaAutomaticaNuevaComponent } from './prueba-automatica-nueva/prueba-automatica-nueva.component';

@NgModule({
	declarations: [ AppComponent, PruebaComponent, PruebaAutomaticaComponent, PruebaAutomaticaNuevaComponent ],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
