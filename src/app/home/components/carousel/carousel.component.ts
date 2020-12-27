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
            headerColor: '#bedcfa',
            badges: [
                {
                    label: 'ReactJS',
                    icon: 'fab fa-react'
                },
                {
                    label: 'JS',
                    icon: 'fab fa-js'
                },
                {
                    label: 'Html',
                    icon: 'fab fa-html5'
                },
                {
                    label: 'Redux',
                    icon: ''
                },
                {
                    label: 'Redux Thunk',
                    icon: ''
                },
                {
                    label: 'AWS',
                    icon: 'fab fa-aws'
                }
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed.appspot.com/o/images%2Fgs.png?alt=media&token=6975eca6-6d33-4cdd-8ceb-66d8620e18f3',
            url: '',
            projectName: 'Hotel GS',
            personal: false,
            headerColor: '#c0e218',
            badges: [
                {
                    label: 'Angular',
                    icon: 'fab fa-angular'
                },
                {
                    label: 'JS',
                    icon: 'fab fa-js'
                },
                {
                    label: 'Html',
                    icon: 'fab fa-html5'
                },
                {
                    label: 'Sass',
                    icon: 'fab fa-sass'
                },

            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed.appspot.com/o/images%2Fids.png?alt=media&token=717979e8-b391-48b5-a3f0-33375ccb5b26',
            url: '',
            projectName: 'SIPAC',
            personal: false,
            headerColor: '#a6a9b6',
            badges: [
                {
                    label: 'Angular',
                    icon: 'fab fa-angular'
                },
                {
                    label: 'Java',
                    icon: 'fab fa-java'
                },
                {
                    label: 'Typescrip',
                    icon: ''
                },
                {
                    label: 'GCP',
                    icon: ''
                },
                {
                    label: 'Bootstrap',
                    icon: 'fab fa-bootstrap'
                },
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed.appspot.com/o/images%2Fids.png?alt=media&token=717979e8-b391-48b5-a3f0-33375ccb5b26',
            url: 'https://ng-store-2b2df.web.app',
            projectName: 'STORE',
            personal: false,
            headerColor: '#ffa45b',
            badges: [
                {
                    label: 'Angular',
                    icon: 'fab fa-angular'
                },
                {
                    label: 'PWA',
                    icon: 'fas fa-mobile'
                },
                {
                    label: 'Paypal',
                    icon: 'fab fa-paypal'
                },
                {
                    label: 'Rxjs',
                    icon: ''
                },
                {
                    label: 'Flexbox',
                    icon: ''
                },
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed.appspot.com/o/images%2Fids.png?alt=media&token=717979e8-b391-48b5-a3f0-33375ccb5b26',
            url: 'https://eduardogarciabautista.github.io/twitter-layout/',
            projectName: 'Twtitter Layout',
            personal: false,
            headerColor: '#a8dda8',
            badges: [
                {
                    label: 'ReactJS',
                    icon: 'fab fa-react'
                },
                {
                    label: 'Html 5',
                    icon: 'fab fa-html5'
                },
                {
                    label: 'Sass',
                    icon: 'fab fa-sass'
                },
                {
                    label: 'Css grid',
                    icon: ''
                },
                {
                    label: 'Responsive',
                    icon: 'fas fa-mobile'
                },
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed.appspot.com/o/images%2Fids.png?alt=media&token=717979e8-b391-48b5-a3f0-33375ccb5b26',
            url: 'https://eduardogarciabautista.github.io/GIFY-APP/',
            projectName: 'Gyphy App',
            personal: false,
            headerColor: '#a8dda8',
            badges: [
                {
                    label: 'ReactJS',
                    icon: 'fab fa-react'
                },
                {
                    label: 'Html 5',
                    icon: 'fab fa-html5'
                },
                {
                    label: 'Css',
                    icon: 'fab fa-css3'
                },
                {
                    label: 'Responsive',
                    icon: 'fas fa-mobile'
                },
            ]
        },

    ];

    constructor() {
    }

    ngOnInit(): void {
    }


}
