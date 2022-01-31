import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ActiveModule } from './modules/active/active.module';
import { DeletedModule } from './modules/deleted/deleted.module';
import { ManageModule } from './modules/manage/manage.module';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ActiveModule,
    DeletedModule,
    ManageModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
