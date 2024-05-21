import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.css']
})
export class ViewVendorComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'upi'];
  dataSource : any;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getAllVendors("http://localhost:8181/vendors/getAllVendors").subscribe(res=>{
      this.dataSource = res.vendorList;
      console.log(this.dataSource);
    })
  }

  sendMailToVendors(){
    this.auth.sendMailToVendors("http://localhost:8181/vendors/sendEmails",{}).subscribe(res=>{
      if(res){
        alert("Mail has been successfully sent to all the vendors");
      }
      console.log(res);
    });
  }

}
