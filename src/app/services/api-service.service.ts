import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  viewCustomerId: string = '';
  baseUrl: string = 'https://crudcrud.com/api/3ee9c667d766401dab48bc3f27ff089e/customers';

  constructor(private http: HttpClient) { }

  setViewCustomerId(id: string) {
    this.viewCustomerId = id;
  }

  getViewCustomerId() {
    return this.viewCustomerId;
  }

  createCustomer(customer : Customer): Observable<Customer[]> {
    return this.http.post<Customer[]>(this.baseUrl, customer);
  }

  updateCustomer(customer : Customer) : Observable<Customer> {
    return this.http.put<Customer>(this.baseUrl + '/' + this.getViewCustomerId(), customer);
  }

  getCustomerByID(id : string) : Observable<Customer> {
    return this.http.get<Customer>(this.baseUrl + '/' + id);
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl);
  }

  deleteCustomer(id : string) : Observable<Customer[]>{
    return this.http.delete<Customer[]>(this.baseUrl + '/' + id);
  }

}

