import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManualComponent } from './components/manual/manual.component';
import { CliComponentComponent } from './components/cli-component/cli-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ManualComponent,
    CliComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
