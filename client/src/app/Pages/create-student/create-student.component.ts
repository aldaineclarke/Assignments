import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountInterface, AccountService } from 'src/app/Services/account.service';
import { StudentInterface, StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private studentService:StudentService, private router: Router, private accountService:AccountService) { }

  studentForm = this.formBuilder.group({
    fname: ["", Validators.required],
    lname: ["", Validators.required],
    email: ["", Validators.required],
    form: ["", Validators.required],
    accountNum: ['', Validators.required],
    bank: ['', Validators.required],
    branch: ['', Validators.required],
    accountType: ['', Validators.required],
    status: ['', Validators.required],
    studentId: ['', Validators.required],
  })
  ngOnInit(): void {
  }

  createUser(){
    let student = {
      fname: this.studentForm.get("fname")?.value,
      lname: this.studentForm.get("lname")?.value,
      email: this.studentForm.get("email")?.value,
      form: this.studentForm.get("form")?.value
    }
    // let account:Partial<AccountInterface> = {
    //   accountNum: this.studentForm.get("accountNum")?.value,
    //     bank: this.studentForm.get("bank")?.value,
    //     branch: this.studentForm.get("branch")?.value,
    //     accountType: this.studentForm.get("accountType")?.value,
    //     status: this.studentForm.get("status")?.value,
    // }
    this.studentService.createStudent(student).subscribe((response:StudentInterface)=>{
        this.router.navigate(["/students"])

    });

    
  }

}
