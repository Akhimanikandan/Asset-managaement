import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenrequestlistComponent } from './openrequestlist.component';

describe('OpenrequestlistComponent', () => {
  let component: OpenrequestlistComponent;
  let fixture: ComponentFixture<OpenrequestlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenrequestlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenrequestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
