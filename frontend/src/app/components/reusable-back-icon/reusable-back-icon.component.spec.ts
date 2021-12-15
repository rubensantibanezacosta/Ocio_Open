import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableBackIconComponent } from './reusable-back-icon.component';

describe('ReusableBackIconComponent', () => {
  let component: ReusableBackIconComponent;
  let fixture: ComponentFixture<ReusableBackIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableBackIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableBackIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
