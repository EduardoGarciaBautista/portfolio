import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {

    @Input() loadingProfile = true;
    @Input() loadingProjects = true;

    constructor() {
    }

    ngOnInit(): void {
    }

}
