import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterClau } from './footer-clau';

describe('FooterClau', () => {
  let component: FooterClau;
  let fixture: ComponentFixture<FooterClau>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterClau]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterClau);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
