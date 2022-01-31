import { Component, OnInit } from '@angular/core';
import { SharedUserServiceService } from 'src/app/modules/shared-user-service.service';

@Component({
  selector: 'app-active-user-list',
  templateUrl: './active-user-list.component.html',
  styleUrls: ['./active-user-list.component.css']
})
export class ActiveUserListComponent implements OnInit {

  constructor(private sharedUserService: SharedUserServiceService ) { }
   

  userData:any=[];

  ngOnInit(): void {
    this.getActiveUserData();
  }

  getActiveUserData(){
    this.userData=this.sharedUserService.userData;
  }

}
