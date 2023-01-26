import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionChangesComponent } from './action-changes.component';

describe('ActionChangesComponent', () => {
  let component: ActionChangesComponent;
  let fixture: ComponentFixture<ActionChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionChangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
