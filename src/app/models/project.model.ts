import {BadgeModel} from '@models/badge.model';
import {MediaModel} from '@models/media.model';

export interface ProjectModel {
    id: string;
    badges: BadgeModel[];
    headerColor: string;
    img: string;
    personal: boolean;
    projectName: string;
    url: string;
    media: MediaModel[];
    description: string;
    isPublic: boolean;
    gitUrl: string;
}
