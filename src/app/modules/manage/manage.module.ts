import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullUserListComponent } from './manage-components/full-user-list/full-user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './manage-components/user-details/user-details.component';
import { UserFormComponent } from './manage-components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './manage-components/edit-user/edit-user.component';


const routes : Routes = [
  {
    path:"",
    component: FullUserListComponent
  }
]


@NgModule({
  declarations: [
    FullUserListComponent,
    UserDetailsComponent,
    UserFormComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ManageModule { }
