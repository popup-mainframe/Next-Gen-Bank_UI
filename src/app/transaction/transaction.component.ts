import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';
import { Transactions } from '../interfaces/transactions';
import { DecimalPlacesPipe } from '../decimal-places.pipe';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
 
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  providers: [DecimalPlacesPipe]
})
export class TransactionComponent implements OnInit {
  selectedAccount: any;
  transactions: Transactions[] = [];
  dataSource!: MatTableDataSource<Transactions>; // Declare dataSource with definite assignment assertion
 
  @ViewChild(MatPaginator) paginator!: MatPaginator; // Add definite assignment assertion for paginator
  @ViewChild(MatSort) sort!: MatSort; // Add definite assignment assertion for sort
 
  displayedColumns: string[] = ['serialNumber', 'transactionDate', 'transactionRemark', 'creditDebit', 'amountUSD', 'balance'];
 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataserviceService,
    private decimalPlacesPipe: DecimalPlacesPipe
  ) {}
 
  ngOnInit(): void {
    this.fetchTransactionDetails();
  }
 
  fetchTransactionDetails(): void {
    this.route.queryParams.subscribe(params => {
      if (params.accountDetails) {
        this.selectedAccount = JSON.parse(params.accountDetails);
        this.dataService.getTransactionDetails().subscribe({
          next: (data: any) => {
            if (Array.isArray(data.transactions)) {
              this.transactions = data.transactions.map(
                (transaction, index) => ({
                  serialNumber: index + 1,
                  transactionDate: transaction.date,
                  transactionRemark: transaction.bankname,
                  creditDebit: transaction.transaction_value > 0 ? 'Credit' : 'Debit',
                  amountUSD: this.decimalPlacesPipe.transform(Math.abs(transaction.transaction_value)),
                  balance: transaction.new_balance
                })
              );
              this.dataSource = new MatTableDataSource(this.transactions);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            } else {
              console.error('Transaction data is not an array:', data);
            }
          },
          error: error => {
            console.error('Error fetching transaction details:', error);
          }
        });
      }
    });
  }
 
  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}