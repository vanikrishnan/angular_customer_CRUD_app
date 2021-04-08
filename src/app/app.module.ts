import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ng6-toastr-notifications';
import { FilterCustomerPipe } from './filter-customer.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    ViewCustomerComponent,
    UpdateCustomerComponent,
    HomeComponent,
    NavbarComponent,
    FilterCustomerPipe,
    DialogBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent]
})
export class AppModule { }
