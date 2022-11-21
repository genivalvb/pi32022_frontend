import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiiListComponent } from './fii-list.component';

describe('FiiListComponent', () => {
  let component: FiiListComponent;
  let fixture: ComponentFixture<FiiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
