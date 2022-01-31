import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullUserListComponent } from './full-user-list.component';

describe('FullUserListComponent', () => {
  let component: FullUserListComponent;
  let fixture: ComponentFixture<FullUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sending details to preview component', ()=>{
    component.sendDetailsToPreview(1);
    expect(component.selectedUser.firstName).toEqual('Vaibhav');
  });

  it('sending details to preview component', ()=>{
    component.editUserForm(1);
    expect(component.selectedUser.firstName).toEqual('Vaibhav');
  })
});
