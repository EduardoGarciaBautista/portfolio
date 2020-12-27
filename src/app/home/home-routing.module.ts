import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PresentationComponent} from './components/presentation/presentation.component';

const routes: Routes = [

  {
    path: '', component: PresentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
