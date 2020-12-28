import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {environment} from '@environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CertificationsService {

    private certificationsList: string[] = [];

    private behaviourOb = new BehaviorSubject<string[]>([]);

    certifications$ = this.behaviourOb.asObservable();

    constructor(private afs: AngularFirestore) {
        this.fetchCertifications();
    }

    fetchCertifications(): void {
        this.afs.collection(environment.CERTIFICATIONS_COLLECTION).get().subscribe(data => {
            data.docs.forEach(async doc => {

                const {coursesList} = await doc.data() as { coursesList: string[] };

                this.certificationsList = coursesList;
                this.behaviourOb.next(this.certificationsList);
            });
        });
    }

    getCertifications(): string[] {
        return this.certificationsList;
    }
}
