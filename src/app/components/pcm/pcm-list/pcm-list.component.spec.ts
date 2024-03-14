import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcmListComponent } from './pcm-list.component';

describe('PcmListComponent', () => {
  let component: PcmListComponent;
  let fixture: ComponentFixture<PcmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcmListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
