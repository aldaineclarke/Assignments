import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private studentService:StudentService, private router: Router) { }

  studentForm = this.formBuilder.group({
    fname: ["", Validators.required],
    lname: ["", Validators.required],
    email: ["", Validators.required],
    form: ["", Validators.required],
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
    this.studentService.createStudent(student).subscribe(()=>{
      this.router.navigate(["/students"])
    });

    
  }

}
