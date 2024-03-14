import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpmListComponent } from './opm-list.component';

describe('OpmListComponent', () => {
  let component: OpmListComponent;
  let fixture: ComponentFixture<OpmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpmListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
