import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import {RouterModule} from '@angular/router';
import { SanitizePipe } from './pipes/sanitize.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LazyImageDirective } from './directives/lazy-image.directive';





@NgModule({
    declarations: [MenuComponent, SanitizePipe, ModalComponent, LoaderComponent, LazyImageDirective],
    exports: [
        MenuComponent,
        SanitizePipe,
        MenuComponent,
        ModalComponent,
        LoaderComponent,
        LazyImageDirective
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
