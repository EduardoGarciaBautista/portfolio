import {SocialModel} from '@models/social.model';
import {TechnologyModelProfile} from '@models/technology.model';

export interface ProfileModel {
    image: string;
    job: string;
    lastName: string;
    name: string;
    socialMedia: SocialModel[];
    description: string;
    technologies: TechnologyModelProfile[];
}

