import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ProjectModel} from '@models/project.model';
import {BehaviorSubject} from 'rxjs';
import {environment} from '@environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    private projects: ProjectModel[] = [];

    private projectsObs = new BehaviorSubject<ProjectModel[]>([]);

    projects$ = this.projectsObs.asObservable();


    constructor(private afs: AngularFirestore) {
        this.fetchProjects();
    }

    fetchProjects(): void {
        this.afs.collection(environment.PROJECTS_COLLECTION).get().subscribe(data => {
            const result: ProjectModel[] = [];
            data.docs.forEach(item => {
                result.push(item.data() as ProjectModel);
            });
            this.projects = result;
            this.projectsObs.next(this.projects);
        });
    }

    getProjects(): ProjectModel[] {
        return this.projects;
    }
}