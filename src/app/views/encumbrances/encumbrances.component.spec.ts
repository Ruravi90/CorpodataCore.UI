import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncumbrancesComponent } from './encumbrances.component';

describe('EncumbrancesComponent', () => {
  let component: EncumbrancesComponent;
  let fixture: ComponentFixture<EncumbrancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncumbrancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncumbrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
