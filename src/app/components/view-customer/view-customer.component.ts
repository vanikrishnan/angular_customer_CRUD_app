import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DialogBodyComponent } from 'src/app/dialog-body/dialog-body.component';
import { Customer } from 'src/app/model/customer';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  customerList!: Observable<Customer[]>;
  searchText: string = '';

  constructor(
    private apiService: ApiServiceService,
    private router: Router, private matDialog: MatDialog,
  ) {
    apiService.setViewCustomerId('');
  }

  ngOnInit() {
    this.customerList = this.apiService.getAllCustomers();
    // this.apiService.setCustomerData(this.customerList);
  }

  deleteCustomer(id: string) {
    console.log("delete customer " + id);
    const customers = from(this.customerList);
    this.apiService.deleteCustomer(id).subscribe(data => {
      this.customerList = customers.pipe(filter((data: any) => Object.keys(data).some(function(k){
        return data[k] !== id;
      })));
      // this.customerList = customers.pipe(map((data: any)=> data.filter((item: any) => {
      //   item !== id;
      // })))
    }, error => {
      alert(error);
    });
  }

  viewCustomer(id: string) {
    this.apiService.setViewCustomerId(id);
    this.router.navigate(["/update"]);
  }

  openDialog(customer: Customer) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      name: customer.name
    }
    const dialogRef = this.matDialog.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      if(data) {
        this.deleteCustomer(customer._id);
      }
    }, error => {
      alert(error);
    });
  }



}
