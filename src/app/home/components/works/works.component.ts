import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '@core/services/projects.service';
import {ProjectModel} from '@models/project.model';

@Component({
    selector: 'app-works',
    templateUrl: './works.component.html',
})
export class WorksComponent implements OnInit {

    projects: ProjectModel[] | null = [];

    works = [
        {
            label: '',
            color: 'black',
            border: true
        },
        {
            label: 'in my free time',
            color: 'black'
        },
        {
            label: 'some projects.',
            color: 'black',
            border: true
        }
    ];

    loadingProjects = false;

    constructor(private projectsService: ProjectsService) {
    }

    ngOnInit(): void {
      this.getProjects();
    }

    getProjects(): void {
        if (this.projectsService.getProjects()?.length) {
            this.projects = this.projectsService.getProjects();
        } else {
            this.loadingProjects = true;
            this.projectsService.projects$.subscribe(change => {
                this.projects = change;
                this.loadingProjects = false;
            });
        }
    }
}
