import {Component, Input, OnInit} from '@angular/core';
import {ProjectModel} from '@models/project.model';


@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit {


    @Input() cards: ProjectModel[] = [];

    constructor() {
    }

    ngOnInit(): void {
    }


}
