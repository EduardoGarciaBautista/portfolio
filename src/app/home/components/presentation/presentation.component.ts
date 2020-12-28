import {Component, OnInit} from '@angular/core';

import {ProfileService} from '@core/services/profile.service';

import {ProfileModel} from '@models/profile.model';

@Component({
    selector: 'app-presentation',
    templateUrl: './presentation.component.html',
})
export class PresentationComponent implements OnInit {

    profile: ProfileModel | null = null;


    loadingProfile = false;


    constructor(private profileService: ProfileService) {

    }

    ngOnInit(): void {
        this.getProfile();
    }

    getProfile(): void {
        if (this.profileService.getProfile()) {
            this.profile = this.profileService.getProfile();
        } else {
            this.loadingProfile = true;
            this.profileService.profile$.subscribe(user => {
                this.profile = user;
                this.loadingProfile = false;
            });
        }
    }
}
