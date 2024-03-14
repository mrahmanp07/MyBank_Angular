import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClhListComponent } from './clh-list.component';

describe('ClhListComponent', () => {
  let component: ClhListComponent;
  let fixture: ComponentFixture<ClhListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClhListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
