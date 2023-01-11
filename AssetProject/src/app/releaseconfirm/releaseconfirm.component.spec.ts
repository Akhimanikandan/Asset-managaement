import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseconfirmComponent } from './releaseconfirm.component';

describe('ReleaseconfirmComponent', () => {
  let component: ReleaseconfirmComponent;
  let fixture: ComponentFixture<ReleaseconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseconfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
