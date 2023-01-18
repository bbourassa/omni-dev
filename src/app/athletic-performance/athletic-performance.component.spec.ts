import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleticPerformanceComponent } from './athletic-performance.component';

describe('AthleticPerformanceComponent', () => {
  let component: AthleticPerformanceComponent;
  let fixture: ComponentFixture<AthleticPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleticPerformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleticPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
