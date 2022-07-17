import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegundoComponent } from './segundo/segundo.component';

const routes: Routes = [
  {path:"segundo", component:SegundoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
