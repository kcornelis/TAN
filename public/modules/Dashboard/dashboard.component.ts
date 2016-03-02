import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'tan-dashboard',
    templateUrl: 'modules/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    tasks: number;

    constructor() {
    }

    ngOnInit() {
        this.tasks = 5;
    }
}