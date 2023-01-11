import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaserequestlistComponent } from './releaserequestlist.component';

describe('ReleaserequestlistComponent', () => {
  let component: ReleaserequestlistComponent;
  let fixture: ComponentFixture<ReleaserequestlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaserequestlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaserequestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
