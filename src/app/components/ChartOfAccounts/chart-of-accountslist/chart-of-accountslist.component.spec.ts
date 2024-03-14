import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfAccountslistComponent } from './chart-of-accountslist.component';

describe('ChartOfAccountslistComponent', () => {
  let component: ChartOfAccountslistComponent;
  let fixture: ComponentFixture<ChartOfAccountslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartOfAccountslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartOfAccountslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
