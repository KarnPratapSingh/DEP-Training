import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  @Input('user') selectedUser: any;

  constructor(private fb: FormBuilder) {}

  updateUserForm!: FormGroup;

  ngOnInit(): void {
    this.formInitialization();
  }

  formInitialization() {
    this.updateUserForm = this.fb.group({
      password: [''],
      age: [''],
    });
  }

  onSubmit() {
    console.log(this.updateUserForm.value);
  }
}
