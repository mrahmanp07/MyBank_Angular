import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClhCrateComponent } from './clh-crate.component';

describe('ClhCrateComponent', () => {
  let component: ClhCrateComponent;
  let fixture: ComponentFixture<ClhCrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClhCrateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClhCrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
