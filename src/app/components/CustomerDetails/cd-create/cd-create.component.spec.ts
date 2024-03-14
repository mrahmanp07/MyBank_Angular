import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdCreateComponent } from './cd-create.component';

describe('CdCreateComponent', () => {
  let component: CdCreateComponent;
  let fixture: ComponentFixture<CdCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
