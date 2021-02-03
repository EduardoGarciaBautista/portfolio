import {Component, OnInit} from '@angular/core';

import {ProfileService} from '@core/services/profile.service';

import {ProfileModel} from '@models/profile.model';
import {PROFILE} from '@constants/profile.constant';

@Component({
    selector: 'app-presentation',
    templateUrl: './presentation.component.html',
})
export class PresentationComponent implements OnInit {

    profile: ProfileModel = PROFILE;

    loadingProfile = false;

    constructor(private profileService: ProfileService) {

    }

    ngOnInit(): void {
        this.getProfile();
    }

    getProfile(): void {
        const profile = this.profileService.getProfile();
        if (profile) {
            this.profile = profile;
        } else {
            this.loadingProfile = true;
            this.profileService.profile$.subscribe(user => {
                this.profile = user;
                this.loadingProfile = false;
            });
        }
    }
}
