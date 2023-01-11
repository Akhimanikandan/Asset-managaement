import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmopenComponent } from './confirmopen.component';

describe('ConfirmopenComponent', () => {
  let component: ConfirmopenComponent;
  let fixture: ComponentFixture<ConfirmopenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmopenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
