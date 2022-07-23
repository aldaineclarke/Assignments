import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
  
  createAccount(data:Partial<AccountInterface>):Observable<any>{
    return this.http.post("http://localhost:3000/api/accounts/", data);
  }
  getAccount(studentID:string){
    return this.http.get("http://localhost:3000/api/accounts/"+studentID).pipe(

    )
  }
}

export interface AccountInterface{
  _id?: string;
  accountNum: string;
  bank: string;
  branch: string;
  accountType: string;
  status: string;
  studentId: string;
}
