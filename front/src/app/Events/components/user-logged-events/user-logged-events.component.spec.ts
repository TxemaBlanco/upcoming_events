import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoggedEventsComponent } from './user-logged-events.component';

describe('UserLoggedEventsComponent', () => {
  let component: UserLoggedEventsComponent;
  let fixture: ComponentFixture<UserLoggedEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLoggedEventsComponent]
    });
    fixture = TestBed.createComponent(UserLoggedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
