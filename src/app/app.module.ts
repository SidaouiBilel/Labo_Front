import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';

import {HashLocationStrategy, LocationStrategy, CommonModule} from '@angular/common';
import {MembreService} from "./services/membre-service.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {ArticleResolver} from "./article.resolver";
import {GuardService} from "./services/guard.Component";
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports:      [
        CommonModule,
        BrowserModule,
        DashboardModule,
        SidebarModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([])
    ],
    declarations: [ AppComponent, DashboardComponent, HeaderComponent],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},MembreService,ArticleResolver,GuardService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
