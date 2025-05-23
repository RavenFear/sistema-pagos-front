import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PaymentsRoutingModule} from './payments-routing.module';
import {CreatePaymentDialogComponent} from "./create-payment-dialog/create-payment-dialog.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FileUploadModule} from "primeng/fileupload";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {InputSwitchModule} from "primeng/inputswitch";
import {InputNumberModule} from "primeng/inputnumber";
import {PaymentsListComponent} from "./payments-list/payments-list.component";
import {TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";
import {TooltipModule} from "primeng/tooltip";
import {TagModule} from "primeng/tag";


@NgModule({
    declarations: [CreatePaymentDialogComponent, PaymentsListComponent],
    exports: [
        PaymentsListComponent
    ],
    imports: [
        CommonModule,
        PaymentsRoutingModule,
        ReactiveFormsModule,
        FileUploadModule,
        DropdownModule,
        InputTextModule,
        CalendarModule,
        InputSwitchModule,
        InputNumberModule,
        TableModule,
        RippleModule,
        TooltipModule,
        FormsModule,
        TagModule
    ]
})
export class PaymentsModule {
}
