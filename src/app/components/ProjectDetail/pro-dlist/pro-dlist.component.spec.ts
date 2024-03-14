import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDListComponent } from './pro-dlist.component';

describe('ProDListComponent', () => {
  let component: ProDListComponent;
  let fixture: ComponentFixture<ProDListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProDListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProDListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
