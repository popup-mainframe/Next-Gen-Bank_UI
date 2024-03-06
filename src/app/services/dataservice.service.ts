import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  // private baseUrl = 'http://localhost:3000';
     private baseUrl = 'http://10.10.1.135:4080/obp_bs-1.0.0';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

 
  fetchData(): Observable<any[]> {
    const url = `${this.baseUrl}/login`; // Replace '/data' with the actual endpoint to fetch data from
    return this.http.get<any[]>(url);
  }
 // Method to fetch account details based on account number
//  getAccountDetails(accountNumber: string): Observable<any[]> {
//   return this.http.get<any[]>(`${this.baseUrl}/details?accountNumber=${accountNumber}`);
// }

// Method to fetch transaction details for a given account number
// getTransactionDetails(): Observable<any> {
//   const url = `${this.baseUrl}/transactions `;
//   return this.http.get<any>(url);
// }

// getTransactionDetails(): Observable<any> {
  // const url = `${this.baseUrl}/transactionhistory?bankid=rbs-rbs-a&accountid=12345`;
  // return this.http.get<any[]>(url);
  // // const accountId = this.cookieService.get("accountId");
  // //   const url = `${this.baseUrl}/transactionhistory?bankid=rbs-rbs-a&accountid=${accountId}`;
  // // const serverUrl = 'http://10.10.1.135:4080/obp_bs-1.0.0';
  //   // const url = `${serverUrl}/transactionhistory?bankid=${bankId}&accountid=${accountId}`;

  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Authorization': this.cookieService.get("token")
  //     // 'Authorization': token
  //   });

  //   return this.http.get(url, { headers: headers });
  getTransactionDetails(): Observable<any[]> {
    const url = `${this.baseUrl}/transactionhistory?bankid=rbs-rbs-a&accountid=12345`;
  
    // Define your headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.cookieService.get("token")
    });
  
    // Pass the headers as an option in the HTTP GET request
    return this.http.get<any[]>(url, { headers: headers });
  }
  // }
}

