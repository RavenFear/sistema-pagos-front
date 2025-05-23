import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PersonalRoutingModule} from './personal-routing.module';
import {CreateUpdateUserDialogComponent} from "./create-update-user-dialog/create-update-user-dialog.component";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {FileUploadModule} from "primeng/fileupload";
import {UsersListComponent} from "./users-list/users-list.component";
import {DropdownModule} from "primeng/dropdown";
import {TableModule} from "primeng/table";
import {TagModule} from "primeng/tag";


@NgModule({
    declarations: [CreateUpdateUserDialogComponent, UsersListComponent],
    exports: [
        UsersListComponent
    ],
    imports: [
        CommonModule,
        PersonalRoutingModule,
        DialogModule,
        InputTextModule,
        FormsModule,
        ButtonModule,
        FileUploadModule,
        ReactiveFormsModule,
        DropdownModule,
        TableModule,
        TagModule
    ]
})
export class PersonalModule {
}
