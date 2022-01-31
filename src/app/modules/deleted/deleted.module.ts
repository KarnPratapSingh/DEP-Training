import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedUserListComponent } from './deleted-components/deleted-user-list/deleted-user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';


const routes : Routes = [
  {
    path:"",
    component: DeletedUserListComponent
  }
]


@NgModule({
  declarations: [
    DeletedUserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class DeletedModule { }
