import { Component, OnInit } from '@angular/core';
import { SharedUserServiceService } from 'src/app/modules/shared-user-service.service';

@Component({
  selector: 'app-deleted-user-list',
  templateUrl: './deleted-user-list.component.html',
  styleUrls: ['./deleted-user-list.component.css']
})
export class DeletedUserListComponent implements OnInit {

  constructor(private sharedUserService: SharedUserServiceService) { }

  userData:any=[];

  ngOnInit(): void {
    this.getDeletedUserData();
  }

  getDeletedUserData(){
    this.userData=this.sharedUserService.userData;
  }

}
