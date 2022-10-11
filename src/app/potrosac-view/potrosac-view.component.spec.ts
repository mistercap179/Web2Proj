import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotrosacViewComponent } from './potrosac-view.component';

describe('PotrosacViewComponent', () => {
  let component: PotrosacViewComponent;
  let fixture: ComponentFixture<PotrosacViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotrosacViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotrosacViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
