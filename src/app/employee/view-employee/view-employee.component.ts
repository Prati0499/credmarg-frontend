import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})

export class ViewEmployeeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'designation', 'ctc', 'email'];
  dataSource : any;

  constructor(private auth : AuthService) { }

  ngOnInit(): void {

    this.auth.getAllEmployees("http://localhost:8181/employees/getAllEmployees").subscribe(res=>{
      this.dataSource = res.employeeList;
      console.log(this.dataSource);

    });

  }

}
