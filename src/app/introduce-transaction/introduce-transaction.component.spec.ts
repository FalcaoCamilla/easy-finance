import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceTransactionComponent } from './introduce-transaction.component';

describe('IntroduceTransactionComponent', () => {
  let component: IntroduceTransactionComponent;
  let fixture: ComponentFixture<IntroduceTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduceTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduceTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
