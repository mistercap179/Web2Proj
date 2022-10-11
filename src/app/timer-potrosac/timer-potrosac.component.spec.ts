import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerPotrosacComponent } from './timer-potrosac.component';

describe('TimerPotrosacComponent', () => {
  let component: TimerPotrosacComponent;
  let fixture: ComponentFixture<TimerPotrosacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerPotrosacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerPotrosacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
