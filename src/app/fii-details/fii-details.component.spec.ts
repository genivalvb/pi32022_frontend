import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiiDetailsComponent } from './fii-details.component';

describe('PacienteDetailsComponent', () => {
  let component: FiiDetailsComponent;
  let fixture: ComponentFixture<FiiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
