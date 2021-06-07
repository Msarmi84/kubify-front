import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsFormComponent } from './bands-form.component';

describe('BandsFormComponent', () => {
  let component: BandsFormComponent;
  let fixture: ComponentFixture<BandsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
