import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveUserListComponent } from './active-user-list.component';
import { FullnamePipe } from 'src/app/pipes/fullname.pipe';
import { UserActiveButtonPipe } from 'src/app/pipes/user-active-button.pipe';

describe('ActiveUserListComponent', () => {
  let component: ActiveUserListComponent;
  let fixture: ComponentFixture<ActiveUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveUserListComponent, FullnamePipe, UserActiveButtonPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get users', ()=>{
    component.getActiveUserData();
    expect(component.userData[1].firstName).toEqual('Vaibhav');
  });
});
