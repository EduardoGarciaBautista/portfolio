import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import {RouterModule} from '@angular/router';
import { SanitizePipe } from './pipes/sanitize.pipe';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
    declarations: [MenuComponent, SanitizePipe, ModalComponent],
    exports: [
        MenuComponent,
        SanitizePipe,
        MenuComponent,
        ModalComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
