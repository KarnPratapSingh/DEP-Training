import { Component, OnInit } from '@angular/core';
import { SharedUserServiceService } from 'src/app/modules/shared-user-service.service';

@Component({
  selector: 'app-full-user-list',
  templateUrl: './full-user-list.component.html',
  styleUrls: ['./full-user-list.component.css'],
})
export class FullUserListComponent implements OnInit {
  constructor(private sharedUserService: SharedUserServiceService) {}

  userData: any = [];

  selectedUser: any = {
    id: 0,
    firstName: '',
    lastName: '',
    age: 0,
    login: '',
    password: '',
    isDeleted: false,
  };
  selectedUserIndex!: number;

  showPreviewComponent: boolean = false;
  showUserForm: boolean = false;
  showEditUserForm: boolean = false;

  ngOnInit(): void {
    this.userData = this.sharedUserService.userData;
  }

  sendDetailsToPreview(indexOfUser: number) {
    this.showSelectedComponent(false, true, false);
    this.selectedUser = this.userData[indexOfUser];
  }

  createForm() {
    this.showSelectedComponent(false, false, true);
  }

  editUserForm(indexOfUser: number) {
    this.showSelectedComponent(true, false, false);

    this.selectedUser = this.userData[indexOfUser];
  }

  showSelectedComponent(
    showEdit: boolean,
    showPreview: boolean,
    showUser: boolean
  ) {
    this.showEditUserForm = showEdit;
    this.showPreviewComponent = showPreview;
    this.showUserForm = showUser;
  }
}
