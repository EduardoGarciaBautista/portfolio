import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '@core/services/projects.service';
import {ProjectModel} from '@models/project.model';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

    project: ProjectModel | undefined = undefined;

    projectId: string;

    constructor(private activatedRoute: ActivatedRoute,
                private projectService: ProjectsService) {
        this.projectId = this.activatedRoute.snapshot.params.id;
    }

    ngOnInit(): void {


        this.project = this.projectService.getProjectById(this.projectId);
        if (!this.project) {
            this.projectService.projects$.subscribe(data => {
                this.project = this.projectService.getProjectById(this.projectId);
            });
        }
        window.scrollTo({top: 0});
    }

}
