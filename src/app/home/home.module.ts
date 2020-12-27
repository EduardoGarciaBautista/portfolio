import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {PresentationComponent} from './components/presentation/presentation.component';
import {InfoComponent} from './components/info/info.component';
import {WorksComponent} from './components/works/works.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [PresentationComponent, InfoComponent, WorksComponent, CarouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class HomeModule {
}
