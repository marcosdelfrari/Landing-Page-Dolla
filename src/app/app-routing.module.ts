import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForcaComponent } from './pages/forca/forca.component';

const routes: Routes = [
  { path: '', component: ForcaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
