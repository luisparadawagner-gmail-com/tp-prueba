import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaAutomaticaNuevaComponent } from './prueba-automatica-nueva.component';

describe('PruebaAutomaticaNuevaComponent', () => {
  let component: PruebaAutomaticaNuevaComponent;
  let fixture: ComponentFixture<PruebaAutomaticaNuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaAutomaticaNuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaAutomaticaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
