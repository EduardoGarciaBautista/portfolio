import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ProfileModel} from '@models/profile.model';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent implements OnInit {

    @Input() profile: ProfileModel | null = null;

    avatar = '';

    showModal = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    getEvent(event: any): void {
        this.showModal = false;
    }
}
