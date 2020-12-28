import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationsRoutingModule } from './certifications-routing.module';
import { CertificationListComponent } from './components/certification-list/certification-list.component';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [CertificationListComponent],
  imports: [
    CommonModule,
    CertificationsRoutingModule,
      SharedModule
  ]
})
export class CertificationsModule { }
