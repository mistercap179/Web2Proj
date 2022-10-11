import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DostavljaciComponent } from './dostavljaci.component';

describe('DostavljaciComponent', () => {
  let component: DostavljaciComponent;
  let fixture: ComponentFixture<DostavljaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DostavljaciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DostavljaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
