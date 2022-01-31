import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUserListComponent } from './active-components/active-user-list/active-user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';

const routes: Routes = [
  {
    path: '',
    component: ActiveUserListComponent,
  },
];

@NgModule({
  declarations: [ActiveUserListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModuleModule],
})
export class ActiveModule {}
