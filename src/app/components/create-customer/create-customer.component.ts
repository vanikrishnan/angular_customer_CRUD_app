import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  createCustomerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    public toastr: ToastrManager,
    private apiService: ApiServiceService,private router: Router) { 
      apiService.setViewCustomerId('');
    this.createCustomerForm = formBuilder.group({
      _id: [""],
      id: ["",[Validators.min(1),Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
      name: ["", [Validators.required, Validators.pattern('^([a-zA-Z])*$')]],
      phone: ["", [Validators.required]],
      email: ["", [Validators.email, Validators.required]],
      age : ["", [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern('^[1-9][0-9]*$')]],
      address: []
    });
    }

  ngOnInit(): void {
  }

  
  createCustomer() {
    console.log("create button clicked");
    console.log("form value " + JSON.stringify(this.createCustomerForm.value));

    if (this.createCustomerForm.valid) {
      this.toastr.successToastr("This is a vaild form.", "Success!");
      delete this.createCustomerForm.value._id;
      this.apiService.createCustomer(this.createCustomerForm.value).subscribe(data => {
        this.router.navigate(['/view']);
      }, error => {
        alert(error);
      });
    } else {
      this.toastr.warningToastr("This is not a valid form.", "Alert!");
    }
  }


}
