import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http:HttpClient) { }
  endpoint = "http://localhost:3000/api/students"
  getAllStudents():Observable<StudentInterface[]>{
    return this._http.get<StudentInterface[]>(this.endpoint);
  }
  deleteStudent(id:string){
    return this._http.delete(this.endpoint+"/"+id);
  }
  getStudentById(id:string):Observable<StudentInterface>{
    return this._http.get<StudentInterface>(this.endpoint+"/"+id);
  }
  createStudent(student:StudentInterface){
    return this._http.post(this.endpoint+"/create",student);
  }
  UpdateStudent(id:string, data:Partial<StudentInterface>){
    return this._http.patch(this.endpoint+"/"+id, data);
  }
}


export interface StudentInterface{
  _id?: string;
  fname: string;
  lname: string;
  email: string;
  form: number;
}