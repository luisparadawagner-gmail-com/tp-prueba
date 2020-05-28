import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormMaterialComponent } from './angular-material/form-material/form-material.component';
import { PadreComponent } from './comunicacion/padre-hijo/padre/padre.component';
import { EquipoComponent } from './data-bindings/equipo/equipo.component';

const routes: Routes = [
	{ path: 'form-material/:"numero"', component: FormMaterialComponent },
	{
		path: 'padre-component',
		component: PadreComponent,
		children: [
			{
				path: 'equipo',
				component: EquipoComponent
			}
		]
	},
	{ path: '', redirectTo: 'padre-component', pathMatch: 'full' },
	{ path: '**', component: FormMaterialComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
