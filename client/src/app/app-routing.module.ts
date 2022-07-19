import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './Pages/create-student/create-student.component';
import { EditStudentComponent } from './Pages/edit-student/edit-student.component';
import { HomeComponent } from './Pages/home/home.component';


const routes: Routes = [
  {
    path:"students", component: HomeComponent
  },
  {
    path:"students/create", component:CreateStudentComponent
  },
  {
    path:"students/edit/:id", component:EditStudentComponent
  },
  {
    path:"**", redirectTo: "students", pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
