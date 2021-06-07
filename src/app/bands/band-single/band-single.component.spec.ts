import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandSingleComponent } from './band-single.component';

describe('BandSingleComponent', () => {
  let component: BandSingleComponent;
  let fixture: ComponentFixture<BandSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
