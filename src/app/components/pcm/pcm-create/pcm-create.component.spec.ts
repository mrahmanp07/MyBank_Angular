import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcmCreateComponent } from './pcm-create.component';

describe('PcmCreateComponent', () => {
  let component: PcmCreateComponent;
  let fixture: ComponentFixture<PcmCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcmCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcmCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
