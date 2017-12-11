import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { ModifierComponent } from './modifier/modifier.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { MessageComponent } from './message/message.component'
import {AddEmailComponent} from "./Addemail/AddEmailComponent";

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        BrowserModule,
        FormsModule,
        CKEditorModule
    ],
    declarations: [ MODULE_COMPONENTS, ModifierComponent, AddEmailComponent]
})

export class DashboardModule{}
