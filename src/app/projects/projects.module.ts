import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjectsRoutingModule} from './projects-routing.module';
import {DetailComponent} from './components/detail/detail.component';



@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
  ]
})
export class ProjectsModule {
}
