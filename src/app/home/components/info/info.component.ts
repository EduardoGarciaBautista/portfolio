import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html'
})
export class InfoComponent implements OnInit {

    avatar = 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed.appspot.com/o/images%2FIMG_20200917_092733_2.jpg?alt=media&token=957b87b5-d4ad-4915-b908-dee36305eaca';

    technologies = [
        {
            title: 'Angular',
            icon: 'fab fa-angular',
            color: '#cd5d7d'
        },
        {
            title: 'ReactJS',
            icon: 'fab fa-react',
            color: '#ffa45b'
        },
        {
            title: 'Javascript',
            icon: 'fab fa-js',
            color: '#4a3f35'
        },
        {
            title: 'Bootstrap',
            icon: 'fab fa-bootstrap',
            color: '#0e49b5'
        },
        {
            title: 'Css3',
            icon: 'fab fa-css3',
            color: '#f37121'
        },
        {
            title: 'Sass',
            icon: 'fab fa-sass',
            color: '#ffabe1'
        },
        {
            title: 'Responsive',
            icon: 'fas fa-mobile',
            color: '#999b84'
        }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
