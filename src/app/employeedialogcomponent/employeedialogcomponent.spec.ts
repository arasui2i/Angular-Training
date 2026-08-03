import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeedialogcomponent } from './employeedialogcomponent';

describe('Employeedialogcomponent', () => {
  let component: Employeedialogcomponent;
  let fixture: ComponentFixture<Employeedialogcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeedialogcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Employeedialogcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
