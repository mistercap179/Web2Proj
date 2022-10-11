import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodInfoViewComponent } from './proizvod-info-view.component';

describe('ProizvodInfoViewComponent', () => {
  let component: ProizvodInfoViewComponent;
  let fixture: ComponentFixture<ProizvodInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProizvodInfoViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProizvodInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
