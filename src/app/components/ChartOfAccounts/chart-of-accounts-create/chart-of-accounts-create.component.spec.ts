import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfAccountsCreateComponent } from './chart-of-accounts-create.component';

describe('ChartOfAccountsCreateComponent', () => {
  let component: ChartOfAccountsCreateComponent;
  let fixture: ComponentFixture<ChartOfAccountsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartOfAccountsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartOfAccountsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
