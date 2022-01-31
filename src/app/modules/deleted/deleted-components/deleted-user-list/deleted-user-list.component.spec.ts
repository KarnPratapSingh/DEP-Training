import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedUserListComponent } from './deleted-user-list.component';
import { FullnamePipe } from 'src/app/pipes/fullname.pipe';
import { UserActiveButtonPipe } from 'src/app/pipes/user-active-button.pipe';

describe('DeletedUserListComponent', () => {
  let component: DeletedUserListComponent;
  let fixture: ComponentFixture<DeletedUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedUserListComponent, FullnamePipe, UserActiveButtonPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should give deleted users list', ()=>{
    component.getDeletedUserData();
    expect(component.userData[0].firstName).toEqual('Karn');
  })
});
