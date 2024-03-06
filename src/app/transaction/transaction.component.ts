import { Component } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router'; 
import { DataserviceService } from '../services/dataservice.service';
import { Transactions } from '../interfaces/transactions';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent  {
 
  selectedAccount: any; 
  transactions: Transactions[] = [];

  constructor(private router: Router,  private route: ActivatedRoute, private dataService: DataserviceService) { }

ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log('Query Params:', params);
      if (params.accountDetails) {
        console.log('Account Details:', params.accountDetails);
        this.selectedAccount = JSON.parse(params.accountDetails);
        console.log('Selected Account:', this.selectedAccount);
        // Call method to fetch transaction details here
        this.fetchTransactionDetails();
      }
    });
  }
fetchTransactionDetails(): void {
      this.dataService.getTransactionDetails().subscribe({
        next: (data: any) => {
          if (Array.isArray(data.transactions)) {
            console.log(data);
            this.transactions = data.transactions.map((transaction, index) => ({
              serialNumber: index + 1,
              transactionDate: transaction.date,
              transactionRemark: transaction.bankname,
              creditDebit: transaction.transaction_value > 0 ? 'Credit' : 'Debit',
              amountUSD: Math.abs(transaction.transaction_value)
            }));
          } else {
            console.error('Transaction data is not an array:', data);
          }
        },
        error: (error) => {
          console.error('Error fetching transaction details:', error);
        }
      });
    }
 goBack() {
    this.router.navigate(['/dashboard'])
  }
}

