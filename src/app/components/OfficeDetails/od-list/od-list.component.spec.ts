import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdListComponent } from './od-list.component';

describe('OdListComponent', () => {
  let component: OdListComponent;
  let fixture: ComponentFixture<OdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
