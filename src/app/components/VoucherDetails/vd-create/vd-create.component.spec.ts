import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdCreateComponent } from './vd-create.component';

describe('VdCreateComponent', () => {
  let component: VdCreateComponent;
  let fixture: ComponentFixture<VdCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VdCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
