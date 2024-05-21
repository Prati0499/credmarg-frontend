import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { ViewVendorComponent } from './view-vendor/view-vendor.component';
import { ViewEmailsComponent } from './view-emails/view-emails.component';

const routes: Routes = [
  {
    path: 'add-vendor', component: AddVendorComponent
  },
  {
    path: 'view-vendor', component: ViewVendorComponent
  },
  {
    path: 'view-emails', component: ViewEmailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
