import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccumulatorOperator } from 'mongoose';
import { AccountInterface, AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private accountService: AccountService, private route:ActivatedRoute , private router:Router) { }
  accountCreation = this.formBuilder.group({
      accountNum: ['', Validators.required],
      bank: ['', Validators.required],
      branch: ['', Validators.required],
      accountType: ['', Validators.required],
      status: ['', Validators.required],
      studentId: ['', Validators.required],
  })

  ngOnInit(): void {
  }


  saveAccountInfo(){
    let data:Partial<AccountInterface> = {
        accountNum: this.accountCreation.get("accountNum")?.value,
        bank: this.accountCreation.get("bank")?.value,
        branch: this.accountCreation.get("branch")?.value,
        accountType: this.accountCreation.get("accountType")?.value,
        status: this.accountCreation.get("status")?.value,
    }
    this.route.paramMap.subscribe((paramMap)=>{

      let id = paramMap.get('id') as string;
      data.studentId = id;
      this.accountService.createAccount(data)
    })
    this.accountService.createAccount(data).subscribe(()=>{
      this.router.navigate(['/students'])
    }
    );
  }

}
