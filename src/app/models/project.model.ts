import {BadgeModel} from '@models/badge.model';

export interface ProjectModel {
    badges: BadgeModel[];
    headerColor: string;
    img: string;
    personal: boolean;
    projectName: string;
    url: string;
}
