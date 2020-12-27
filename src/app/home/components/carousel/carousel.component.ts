import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit {

    cards = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed.appspot.com/o/images%2Fgs.png?alt=media&token=6975eca6-6d33-4cdd-8ceb-66d8620e18f3',
            url: '',
            projectName: 'Red Social',
            personal: false,
            headerColor: '#a3ddcb'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed.appspot.com/o/images%2Fgs.png?alt=media&token=6975eca6-6d33-4cdd-8ceb-66d8620e18f3',
            url: '',
            projectName: 'Hotel GS',
            personal: false,
            headerColor: '#fcf8e8'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed.appspot.com/o/images%2Fids.png?alt=media&token=717979e8-b391-48b5-a3f0-33375ccb5b26',
            url: '',
            projectName: 'SIPAC',
            personal: false,
            headerColor: '#f9f7cf'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed.appspot.com/o/images%2Fids.png?alt=media&token=717979e8-b391-48b5-a3f0-33375ccb5b26',
            url: '',
            projectName: 'SIPAC',
            personal: false,
            headerColor: '#726a95'
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }


}
