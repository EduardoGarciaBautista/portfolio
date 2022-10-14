import {Injectable} from '@angular/core';
import {environment} from '@environments/environment';
import {ProfileModel} from '@models/profile.model';
import {PROFILE} from '@constants/profile.constant';
import {BehaviorSubject} from 'rxjs';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';

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
                const col = collection(this.afs, environment.PROFILE_COLLECTION);
                collectionData(col).subscribe(data => {
                    const profile = data[0] as ProfileModel;
                    this.profileUser = profile;
                    this.profile.next(profile);
                });
            } catch (e) {
                reject(null);
            }
        });
    }


    getProfile(): ProfileModel | null {
        return this.profileUser;
    }

}
