import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
})
export class WorksComponent implements OnInit {

  works = [
    {
      label: '',
      color: 'black',
      border: true
    },
    {
      label: 'in',
      color: 'black'
    },
    {
      label: 'some professional and personal projects.',
      color: 'black',
      border: true
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
