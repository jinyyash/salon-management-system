import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditservicesComponent } from './editservices.component';

describe('EditservicesComponent', () => {
  let component: EditservicesComponent;
  let fixture: ComponentFixture<EditservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
