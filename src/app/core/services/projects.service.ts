import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import { ProjectModel } from '@models/project.model';
import { BehaviorSubject } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    private projects: ProjectModel[] | null = [];

    private projectsObs = new BehaviorSubject<ProjectModel[]>([]);

    projects$ = this.projectsObs.asObservable();


    constructor(private afs: Firestore) {
        this.fetchProjects();
    }

    fetchProjects(): void {
        const col = collection(this.afs, environment.PROJECTS_COLLECTION);
        collectionData(col).subscribe(data => {
            this.projects = data.map(d => d as ProjectModel).reverse();
            this.projectsObs.next(this.projects);
        });
    }

    getProjects(): ProjectModel[] | null {
        return this.projects;
    }

    getProjectById(projectId: string): ProjectModel | undefined {
        if (this.projects) {
            return this.projects.find(({ id }) => id === projectId);
        }
        return undefined;
    }
}
