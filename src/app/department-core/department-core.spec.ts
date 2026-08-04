import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentCore } from './department-core';

describe('DepartmentCore', () => {
  let component: DepartmentCore;
  let fixture: ComponentFixture<DepartmentCore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentCore],
    }).compileComponents();

    fixture = TestBed.createComponent(DepartmentCore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
