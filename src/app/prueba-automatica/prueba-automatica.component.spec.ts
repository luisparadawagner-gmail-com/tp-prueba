import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaAutomaticaComponent } from './prueba-automatica.component';

describe('PruebaAutomaticaComponent', () => {
  let component: PruebaAutomaticaComponent;
  let fixture: ComponentFixture<PruebaAutomaticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaAutomaticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaAutomaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
