import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedUserServiceService {
  constructor() {}

  // Dummy data being used:
  userData: any = [
    {
      id: 1,
      firstName: 'Karn',
      lastName: 'Pratap',
      age: 23,
      login: 'kps@epam.com',
      password: '12*****',
      isDeleted: true,
    },

    {
      id: 2,
      firstName: 'Vaibhav',
      lastName: 'Gupta',
      age: 22,
      login: 'Vaibhav@epam.com',
      password: '34*****',
      isDeleted: false,
    },

    {
      id: 3,
      firstName: 'Roshan',
      lastName: 'Kharke',
      age: 21,
      login: 'Roshan123@epam.com',
      password: '88*****',
      isDeleted: true,
    },

    {
      id: 4,
      firstName: 'Ibrat',
      lastName: 'Nawaz',
      age: 23,
      login: 'Nawaz23@epam.com',
      password: '09*****',
      isDeleted: false,
    },
  ];
}
