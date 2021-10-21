import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessURLComponent } from './access-url.component';

describe('AccessURLComponent', () => {
  let component: AccessURLComponent;
  let fixture: ComponentFixture<AccessURLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessURLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
