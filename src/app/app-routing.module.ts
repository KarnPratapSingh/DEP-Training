import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ActiveUserListComponent } from './modules/active/active-components/active-user-list/active-user-list.component';
import { DeletedUserListComponent } from './modules/deleted/deleted-components/deleted-user-list/deleted-user-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },

  {
    path: 'active',
    component: ActiveUserListComponent,
  },

  {
    path: 'deleted',
    component: DeletedUserListComponent,
  },

  {
    path: 'manage',
    loadChildren: () =>
      import('./modules/manage/manage.module').then(
        (module) => module.ManageModule
      ), // loadChildren is for lazy loading.
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
