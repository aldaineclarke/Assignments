import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentInterface, StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private studentService:StudentService) { }
  students$!: Observable<StudentInterface[]>;

  ngOnInit(): void {
    this.reloadStudents()
  }
  reloadStudents(){
    this.students$ = this.studentService.getAllStudents();
    console.log(this.students$)
  }
  deleteRecord(id:string){
    this.studentService.deleteStudent(id).subscribe(()=>{
      this.reloadStudents();
    });
    
  }





}
