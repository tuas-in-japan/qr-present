import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/display-data', pathMatch: 'full' },
  { path: 'display-data', component: DisplayDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
