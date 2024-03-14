import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdListComponent } from './vd-list.component';

describe('VdListComponent', () => {
  let component: VdListComponent;
  let fixture: ComponentFixture<VdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
