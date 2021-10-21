import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindStatsComponent } from './find-stats.component';

describe('FindStatsComponent', () => {
  let component: FindStatsComponent;
  let fixture: ComponentFixture<FindStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
