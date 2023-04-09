import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordFactureComponent } from './dashbord-facture.component';

describe('DashbordFactureComponent', () => {
  let component: DashbordFactureComponent;
  let fixture: ComponentFixture<DashbordFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordFactureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
