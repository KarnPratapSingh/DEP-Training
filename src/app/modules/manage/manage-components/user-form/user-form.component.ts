import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { SharedUserServiceService } from 'src/app/modules/shared-user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private sharedUserService: SharedUserServiceService
  ) {}

  userRegisterForm!: FormGroup;

  ngOnInit(): void {
    this.formInitialization();
  }

  formInitialization() {
    this.userRegisterForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: [''],
      loginId: [''],
      password: [''],
      age: [''],
      isDeleted: [false],
    });
  }

  onSubmit() {
    this.sharedUserService.userData.push(this.userRegisterForm.value);
    this.userRegisterForm.reset(); //spy on
  }
}
