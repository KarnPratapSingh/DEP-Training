import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SharedUserServiceService } from 'src/app/modules/shared-user-service.service';

import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let formFB: FormBuilder;
  let data: any = null;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: FormBuilder,
          useValue: {
            group: (obj: any) => {
              data = obj;
            },
          },
        },
        {
          provide: SharedUserServiceService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    formFB = TestBed.inject(FormBuilder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize', () => {
    spyOn(formFB, 'group').and.callThrough();
    component.formInitialization();
    //expect(data.id[0]).toBe(''); // for reference.
    expect(formFB.group).toHaveBeenCalled();
  });

});
