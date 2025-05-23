import {Component, OnInit, ViewChild} from '@angular/core';
import {PaymentsListComponent} from "../../payments/payments-list/payments-list.component";
import {UsersListComponent} from "../../personal/users-list/users-list.component";
import {LayoutService} from "../../../../layout/service/app.layout.service";

interface MonthlyPayment {
    name?: string;
    amount?: number;
    paid?: boolean;
    date?: string;
}

@Component({
    templateUrl: './dashboardbanking.component.html',
})
export class DashboardBankingComponent implements OnInit {


    display = false;

    displayUser = false;


    @ViewChild('pl', {static: false}) pl: PaymentsListComponent;
    @ViewChild('ul', {static: false}) ul: UsersListComponent;


    constructor(public layoutService: LayoutService) {
    }

    ngOnInit() {

    }

    onClickPagosPorEstado() {
        this.pl.estadoFlag = true;
        this.display = true;
    }

    onClickPagosPorTipo() {
        this.pl.tipoFlag = true;
        this.display = true;
    }

    onClickPagosPorEstudiante() {
        this.pl.estudianteFlag = true;
        this.display = true;
    }

    onClickListadoEstudiantesPrograma() {
        this.ul.programaFlag = true;
        this.displayUser = true;
    }

    onHideDialog() {
        this.pl.endpoint = null;
        this.pl.estudianteFlag = false;
        this.pl.tipoFlag = false;
        this.pl.estadoFlag = false;
    }


    onHideDialogUser() {
        this.ul.endpoint = null;
        this.ul.programaFlag = false;
    }

}
