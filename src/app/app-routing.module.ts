import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiiDetailsComponent } from './fii-details/fii-details.component';
import { FiiListComponent } from './fii-list/fii-list.component';

const routes: Routes = [
  { path: 'fiis', component: FiiListComponent },
  { path: '', redirectTo: 'fiis', pathMatch: 'full'},
  { path: 'fii-details/um/:id', component: FiiDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
