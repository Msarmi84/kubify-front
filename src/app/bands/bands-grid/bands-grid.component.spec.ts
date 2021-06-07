import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsGridComponent } from './bands-grid.component';

describe('BandsGridComponent', () => {
  let component: BandsGridComponent;
  let fixture: ComponentFixture<BandsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
