import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceRevenueComponent } from './introduce-revenue.component';

describe('IntroduceRevenueComponent', () => {
  let component: IntroduceRevenueComponent;
  let fixture: ComponentFixture<IntroduceRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduceRevenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduceRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
