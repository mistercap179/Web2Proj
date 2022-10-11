import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DostavljacViewComponent } from './dostavljac-view.component';

describe('DostavljacViewComponent', () => {
  let component: DostavljacViewComponent;
  let fixture: ComponentFixture<DostavljacViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DostavljacViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DostavljacViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
