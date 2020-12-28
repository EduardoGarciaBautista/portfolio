import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {

    @Input() title = '';

    @Output() closed: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit(): void {
    }

    close(): void {
        this.closed.emit({});
    }

}
