import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  [x: string]: any;

  constructor() {}
}
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {
//   getUserDetails() {
//     // Mocked data; replace with API call
//     return {
//       name: 'John Doe',
//       email: 'johndoe@example.com',
//     };
//   }
// }
