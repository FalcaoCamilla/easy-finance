import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountExtractComponent } from './account-extract.component';

describe('AccountExtractComponent', () => {
  let component: AccountExtractComponent;
  let fixture: ComponentFixture<AccountExtractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountExtractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountExtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
