import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserComponent } from './edit-user.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
//import { SharedUserServiceService } from 'src/app/modules/shared-user-service.service';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;
  let data:any=null;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserComponent ],
      imports:[ReactiveFormsModule],
      providers:[{
        provide:FormBuilder,
        useValue:{
          group:(obj:any)=>{
            data=obj;
          }
        }
      }]
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    component.selectedUser={
      id: 1,
    firstName: 'Karn',
    lastName: 'Pratap',
    age: 23,
    login: 'kps@epam.com',
    password: '12*****',
    isDeleted: true
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form', ()=>{
    component.formInitialization();
    //expect(data.age).toEqual('');
    expect(data).toBeTruthy();
  })
});
