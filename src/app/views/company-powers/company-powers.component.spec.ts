import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPowersComponent } from './company-powers.component';

describe('CompanyPowersComponent', () => {
  let component: CompanyPowersComponent;
  let fixture: ComponentFixture<CompanyPowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyPowersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyPowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
