import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm = this.fb.group({
    name: null,
    designation: null,
    ctc: null,
    email: null
  });

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
  }

  saveForm() {
    console.log(this.employeeForm.value);
    this.auth.saveEmployee("http://localhost:8181/employees/addEmployee", this.employeeForm.value).subscribe(res => {
      if (res) {
        //add alert
        alert("Employee Details Added Successfully");
        this.employeeForm.reset();
      }
    });
  }

}
