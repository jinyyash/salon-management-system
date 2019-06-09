import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingReportComponent } from './billing-report.component';

describe('BillingReportComponent', () => {
  let component: BillingReportComponent;
  let fixture: ComponentFixture<BillingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
