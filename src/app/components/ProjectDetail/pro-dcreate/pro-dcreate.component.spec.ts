import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDCreateComponent } from './pro-dcreate.component';

describe('ProDCreateComponent', () => {
  let component: ProDCreateComponent;
  let fixture: ComponentFixture<ProDCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProDCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProDCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
