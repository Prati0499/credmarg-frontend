import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  vendorForm = this.fb.group({
    name : null,
    email :  null,
    upi : null,
  });

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
  }

  saveForm(){
    console.log(this.vendorForm.value);
    this.auth.saveVendor("http://localhost:8181/vendors/addVendor",this.vendorForm.value).subscribe(res=>{
      if(res){
        alert("Vendor Details Added Successfully");
        this.vendorForm.reset();
      }
    });
  
  }

}
