import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralFitnessComponent } from './general-fitness.component';

describe('GeneralFitnessComponent', () => {
  let component: GeneralFitnessComponent;
  let fixture: ComponentFixture<GeneralFitnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralFitnessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
