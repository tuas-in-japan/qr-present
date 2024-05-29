import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import { StudentViewComponent } from './student-view/student-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/display-data', pathMatch: 'full' },
  { path: 'student-view', component: StudentViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
