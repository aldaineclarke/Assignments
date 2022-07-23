import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { CreateStudentComponent } from './Pages/create-student/create-student.component';
import { EditStudentComponent } from './Pages/edit-student/edit-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAccountComponent } from './Pages/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateStudentComponent,
    EditStudentComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
