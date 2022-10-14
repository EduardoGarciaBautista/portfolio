import {Injectable} from '@angular/core';
import {environment} from '@environments/environment';
import {ProfileModel} from '@models/profile.model';
import {PROFILE} from '@constants/profile.constant';
import {BehaviorSubject} from 'rxjs';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    private profileUser: ProfileModel | null = null;

    private profile: BehaviorSubject<ProfileModel> = new BehaviorSubject<ProfileModel>(PROFILE);

    profile$ = this.profile.asObservable();

    constructor(private afs: Firestore) {
        this.fetchProfile();
    }

    fetchProfile(): Promise<ProfileModel> {
        return new Promise((resolve, reject) => {
            try {
                // this.afs.collection(environment.PROFILE_COLLECTION).get().subscribe(data => {
                //     data.docs.forEach(doc => {

                //         this.profileUser = doc.data() as ProfileModel;
                //         this.profile.next(this.profileUser);
                //     });
                // });
            } catch (e) {
                reject(null);
            }
        });
    }


    getProfile(): ProfileModel | null {
        return this.profileUser;
    }

}
