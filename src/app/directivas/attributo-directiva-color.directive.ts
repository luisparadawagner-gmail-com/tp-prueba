// ElementRef: nos permite acceder directamente al elemento del DOM al cual le estamos aplicando la directiva, por ej: un texto
// HostListener: nos permite subscribirnos a los eventos del DOM que se apliquen al elemento seleccionado
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// Con este decorador podemos setear el selector que va a identificar la directiva en el proyecto.
@Directive({
	// Prefijar la directiva con app para que no choque con otra directiva HTML o de terceros
	selector: '[appColor]' // Notar los corchetes, funciona como property binding
})
export class AppColorDirective {
	@Input() appColor: string;

	constructor(private eleRef: ElementRef) {
		// Con la propiedad nativeElement podemos acceder directamente al elemento al cual se le aplica la directiva en el HTML
		eleRef.nativeElement.style.background = 'red';
	}

	@HostListener('mouseenter')
	onMouseEnter() {
		this.cambiarColor(this.appColor || 'yellow');
	}

	@HostListener('mouseleave')
	onMouseLeave() {
		this.cambiarColor(null);
	}

	private cambiarColor(color: string) {
		this.eleRef.nativeElement.style.backgroundColor = color;
	}
}
