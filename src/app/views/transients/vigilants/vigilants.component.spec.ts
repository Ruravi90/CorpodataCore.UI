import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VigilantsComponent } from './vigilants.component';

describe('VigilantsComponent', () => {
  let component: VigilantsComponent;
  let fixture: ComponentFixture<VigilantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VigilantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VigilantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
