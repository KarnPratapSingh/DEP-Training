import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from 'src/app/pipes/fullname.pipe';
import { UserActiveButtonPipe } from 'src/app/pipes/user-active-button.pipe';



@NgModule({
  declarations: [ FullnamePipe,
                  UserActiveButtonPipe],
  imports: [
    CommonModule
  ],
  exports:[FullnamePipe, UserActiveButtonPipe]
})
export class SharedModuleModule { }
