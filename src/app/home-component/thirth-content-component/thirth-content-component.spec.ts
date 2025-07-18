import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirthContentComponent } from './thirth-content-component';

describe('ThirthContentComponent', () => {
  let component: ThirthContentComponent;
  let fixture: ComponentFixture<ThirthContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirthContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirthContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
