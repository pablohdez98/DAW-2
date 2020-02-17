import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioridadComponent } from './prioridad.component';

describe('PrioridadComponent', () => {
  let component: PrioridadComponent;
  let fixture: ComponentFixture<PrioridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrioridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
