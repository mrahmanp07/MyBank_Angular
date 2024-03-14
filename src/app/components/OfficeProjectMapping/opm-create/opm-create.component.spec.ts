import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpmCreateComponent } from './opm-create.component';

describe('OpmCreateComponent', () => {
  let component: OpmCreateComponent;
  let fixture: ComponentFixture<OpmCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpmCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpmCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
