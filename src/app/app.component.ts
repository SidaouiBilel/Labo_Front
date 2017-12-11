import { Component, OnInit } from '@angular/core';
import {Variables} from "./services/global.variable";

declare var $:any;

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    providers: [Variables]
})

export class AppComponent implements OnInit{
    ngOnInit(){
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    }

}
