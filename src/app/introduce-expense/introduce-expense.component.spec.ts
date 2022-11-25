import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceExpenseComponent } from './introduce-expense.component';

describe('IntroduceExpenseComponent', () => {
  let component: IntroduceExpenseComponent;
  let fixture: ComponentFixture<IntroduceExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduceExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduceExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
