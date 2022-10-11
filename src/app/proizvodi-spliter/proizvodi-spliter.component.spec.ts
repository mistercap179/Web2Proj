import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodiSpliterComponent } from './proizvodi-spliter.component';

describe('ProizvodiSpliterComponent', () => {
  let component: ProizvodiSpliterComponent;
  let fixture: ComponentFixture<ProizvodiSpliterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProizvodiSpliterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProizvodiSpliterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
