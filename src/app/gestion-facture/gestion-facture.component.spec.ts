import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFactureComponent } from './gestion-facture.component';

describe('GestionFactureComponent', () => {
  let component: GestionFactureComponent;
  let fixture: ComponentFixture<GestionFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionFactureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
