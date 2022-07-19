import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentInterface, StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  constructor(private formBuilder:FormBuilder, private studentService:StudentService, private router: Router, private route:ActivatedRoute) { }

  student!:StudentInterface;
  id = "";
  studentForm = this.formBuilder.group({
    fname: ["",Validators.required],
    lname: ["",Validators.required],
    email: ["",Validators.required],
    form: ["",Validators.required],
  })

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.id = params.get("id") as string;
    });
    this.studentService.getStudentById(this.id).subscribe((student)=>{
      this.student = student;
      this.studentForm.setValue({
        fname: this.student.fname,
        lname: this.student.lname,
        email: this.student.email,
        form: this.student.form
      })
    });
    
  }
  updateUser(){
    let student = {
      fname: this.studentForm.get("fname")?.value,
      lname: this.studentForm.get("lname")?.value,
      email: this.studentForm.get("email")?.value,
      form: this.studentForm.get("form")?.value
    }
    this.studentService.UpdateStudent(this.student?._id as string,student).subscribe(()=>{
      this.router.navigate(["/students"])
    });


    
  }
}
