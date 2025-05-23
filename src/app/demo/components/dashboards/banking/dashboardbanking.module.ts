import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardBankingRoutingModule } from './dashboardbanking-routing.module';
import { DashboardBankingComponent } from './dashboardbanking.component';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import {DialogModule} from "primeng/dialog";
import {PaymentsModule} from "../../payments/payments.module";
import {PersonalModule} from "../../personal/personal.module";

@NgModule({
    imports: [
        CommonModule,
        DashboardBankingRoutingModule,
        ButtonModule,
        ProgressBarModule,
        TableModule,
        ChartModule,
        DropdownModule,
        InputTextareaModule,
        InputTextModule,
        FormsModule,
        TagModule,
        DialogModule,
        PaymentsModule,
        PersonalModule
    ],
    declarations: [
        DashboardBankingComponent
    ]
})
export class DashboardBankingModule { }
