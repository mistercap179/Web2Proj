import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorudzbinaFormComponent } from './porudzbina-form.component';

describe('PorudzbinaFormComponent', () => {
  let component: PorudzbinaFormComponent;
  let fixture: ComponentFixture<PorudzbinaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorudzbinaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorudzbinaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
