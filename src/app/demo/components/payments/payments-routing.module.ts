import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreatePaymentDialogComponent} from "./create-payment-dialog/create-payment-dialog.component";

const routes: Routes = [
    {
        path: '',
        data: {breadcrumb: 'Realizar pago'},
        component: CreatePaymentDialogComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaymentsRoutingModule {
}
