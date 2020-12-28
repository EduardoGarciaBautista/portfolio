import {Component, OnInit} from '@angular/core';
import {CertificationsService} from '@core/services/certifications.service';

@Component({
    selector: 'app-certification-list',
    templateUrl: './certification-list.component.html',
})
export class CertificationListComponent implements OnInit {


    certificationList: string[] = [];

    certificationsLoading = false;

    constructor(private  certificationsService: CertificationsService) {

    }

    ngOnInit(): void {
        if (this.certificationsService.getCertifications().length) {
            this.certificationList = this.certificationsService.getCertifications();
            console.log(this.certificationList);
        } else {
            this.certificationsLoading = true;
            this.certificationsService.certifications$.subscribe(result => {
                this.certificationList = result;
                this.certificationsLoading = false;
            });
        }
    }

}
