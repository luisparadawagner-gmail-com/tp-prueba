import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'caracteresRaros'
})
export class CaracteresRarosPipe implements PipeTransform {
	transform(value: any, args?: any): any {
		debugger;
		if (value != null) {
			if (args === 'mayuscula') {
				return 'NEUQUEN';
			} else if (args === 'minuscula') {
				return 'neuquen';
			}
		} else {
			return null;
		}
	}
}
