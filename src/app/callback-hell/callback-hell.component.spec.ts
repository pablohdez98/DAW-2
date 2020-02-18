import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackHellComponent } from './callback-hell.component';

describe('CallbackHellComponent', () => {
  let component: CallbackHellComponent;
  let fixture: ComponentFixture<CallbackHellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbackHellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackHellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
