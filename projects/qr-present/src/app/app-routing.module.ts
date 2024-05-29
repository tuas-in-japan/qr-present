import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/teacher-view', pathMatch: 'full' },
  { path: 'student-view', component: StudentViewComponent },
  { path: 'teacher-view', component: TeacherViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
