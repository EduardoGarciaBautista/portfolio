import {Injectable} from '@angular/core';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import {environment} from '@environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CertificationsService {

    private certificationsList: string[] = [];

    private behaviourOb = new BehaviorSubject<string[]>([]);

    certifications$ = this.behaviourOb.asObservable();

    constructor(private afs: Firestore) {
        this.fetchCertifications();
    }

    fetchCertifications(): void {
        const col = collection(this.afs, environment.CERTIFICATIONS_COLLECTION);
        collectionData(col).subscribe(r => {
            const {coursesList} = r[0] as { coursesList: string[] };
            this.certificationsList = coursesList;
            this.behaviourOb.next(this.certificationsList);
        });
    }

    getCertifications(): string[] {
        return this.certificationsList;
    }
}
