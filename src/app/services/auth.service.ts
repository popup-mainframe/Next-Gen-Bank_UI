import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable, catchError, map, pipe, throwError } from 'rxjs';
import { Observable, throwError } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';
import { User } from '../interfaces/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private serverUrl = 'http://10.10.1.135:4080/obp_bs-1.0.0';

  // private baseUrl = 'http://localhost:3000/accounts';
    //  private baseUrl = 'http://10.10.1.135:4080/obp_bs-1.0.0/login'

  constructor(private http: HttpClient) {}
  
  // getUserByUsername(username: string) : Observable<User> {
  //   return this.http.get<User[]>(`${this.baseUrl}/users?username=${username}`)
  //   .pipe(
  //     map(users => {
  //       // Check if any user with the specified username exists
  //       if (users && users.length > 0) {
  //         // Return the first user object from the array
  //         return users[0];
  //       } else {
  //         // If no user found, return null or throw an error, depending on your requirement
  //         return null;
  //       }
  //     }),
  //     catchError(error => {
  //       console.error('Error fetching user by username:', error);
  //       return throwError(error);
  //     })
  //   );
  // }
  
//  getUserByUsername(username: string) : Observable<User[]> {
//     return this.http.get<User[]>(`${this.baseUrl}/users?username=${username}`);

//   }
  // login(username: string, password: string): Observable<any> {
  //   const body = { username, password };
  //   return this.http.post<any>(`${this.baseUrl}/accounts`, body);
  // }
  // login(username: string, password: string): Observable<any> {
  //   const serverUrl = 'http://10.10.1.135:4080/obp_bs-1.0.0'
  //   const url = `${serverUrl}/login`;
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   });

  //   const body = `username=${username}&password=${password}`;

  //   return this.http.post<any>(url, body, { headers: headers });
  // }
  //   // return this.http.post<any>(this.baseUrl, { username, password });
  login(username: string, password: string): Observable<any> {
    const url = `${this.serverUrl}/login`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = `username=${username}&password=${password}`;

    return this.http.post<any>(url, body, { headers: headers });
  }
  }



