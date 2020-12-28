import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import {RouterModule} from '@angular/router';
import { SanitizePipe } from './pipes/sanitize.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
    declarations: [MenuComponent, SanitizePipe, ModalComponent, LoaderComponent],
    exports: [
        MenuComponent,
        SanitizePipe,
        MenuComponent,
        ModalComponent,
        LoaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
