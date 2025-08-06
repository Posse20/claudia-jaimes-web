import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticSurgeryComponent } from './robotic-surgery-component';

describe('RoboticSurgeryComponent', () => {
  let component: RoboticSurgeryComponent;
  let fixture: ComponentFixture<RoboticSurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticSurgeryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
