import {TechnologyModel} from '@models/technology.model';

export interface ProjectsModel {
    badges: TechnologyModel[];
    headerColor: string;
    img: string;
    personal: boolean;
    projectName: string;
    url: string;
}
