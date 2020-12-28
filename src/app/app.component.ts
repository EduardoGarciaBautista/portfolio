import {Component} from '@angular/core';
import {ProfileService} from '@core/services/profile.service';
import {ProjectsService} from '@core/services/projects.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    loadingProfile = true;

    loadingProjects = true;

    constructor(private profileService: ProfileService,
                private projectsService: ProjectsService) {
        this.profileService.profile$.subscribe(result => {
            if (result) {
                setTimeout(() => {
                    this.loadingProfile = false;
                }, 2000);
            }
        });
        this.projectsService.projects$.subscribe(data => {
            if (data) {
                setTimeout(() => {
                    this.loadingProjects = false;
                }, 2000);
            }
        });
    }
}
