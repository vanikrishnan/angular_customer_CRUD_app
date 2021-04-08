import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {

  updateCustomerForm: FormGroup;
  customer: any;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrManager,
    private apiService: ApiServiceService,private router: Router
  ) {
    this.updateCustomerForm = this.formBuilder.group({
      _id: [""],
      id: ["",[Validators.min(1), Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
      name: ["", [Validators.required, Validators.pattern('^([a-zA-Z])*$')]],
      phone: ["", [Validators.required]],
      email: ["", [Validators.email,Validators.required]],
      age : ["", [Validators.min(1), Validators.required,Validators.max(100), Validators.pattern('^[1-9][0-9]*$')]],
      address: []
    });
  }

  ngOnInit(): void {
    this.apiService.getCustomerByID(this.apiService.getViewCustomerId()).subscribe(data => {
      this.updateCustomerForm.setValue(data);
    }, error => {
      alert(error);
    });
  }

  updateCustomer() {
    console.log(
      "update Customer " + JSON.stringify(this.updateCustomerForm.value)
    );
    if (this.updateCustomerForm.valid) {
      this.toastr.successToastr("This is a vaild form.", "Success!");
      delete this.updateCustomerForm.value._id;
      this.apiService.updateCustomer(this.updateCustomerForm.value).subscribe(data => {
        this.router.navigate(['/view']);
      }, error => {
        alert(error);
      });
    } else {
      this.toastr.warningToastr("This is not a valid form.", "Alert!");
    }
    
  }

}
