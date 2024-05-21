import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-view-emails',
  templateUrl: './view-emails.component.html',
  styleUrls: ['./view-emails.component.css']
})
export class ViewEmailsComponent implements OnInit {

  displayedColumns: string[] = ['vendorName', 'vendorEmail', 'vendorMesg'];
  dataSource : any;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getAllVendorsSmsDetails("http://localhost:8181/vendors/getAllVendorsSmsDetails").subscribe(res=>{
    this.dataSource = res.vendorEmailList; 
    console.log(this.dataSource);
    })
  }

}
