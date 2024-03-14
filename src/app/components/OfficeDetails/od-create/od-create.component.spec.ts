import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdCreateComponent } from './od-create.component';

describe('OdCreateComponent', () => {
  let component: OdCreateComponent;
  let fixture: ComponentFixture<OdCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
