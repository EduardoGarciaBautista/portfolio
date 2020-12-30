import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjectsRoutingModule} from './projects-routing.module';
import {DetailComponent} from './components/detail/detail.component';

import {LazyLoadImageModule} from 'ng-lazyload-image';


@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    LazyLoadImageModule
  ]
})
export class ProjectsModule {
}
