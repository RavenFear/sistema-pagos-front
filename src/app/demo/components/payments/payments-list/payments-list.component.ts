import {Component, OnInit, ViewChild} from '@angular/core';
import {Table, TableLazyLoadEvent} from "primeng/table";
import {PagoModel} from "../../../models/pago.model";
import {PaymentsService} from "../../../services/payments/payments.service";
import {EstudianteModel} from "../../../models/estudiante.model";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-payments-list',
    standalone: false,
    templateUrl: './payments-list.component.html',
    styleUrl: './payments-list.component.scss'
})
export class PaymentsListComponent implements OnInit {

    endpoint = 'pagos';
    estadoFlag = false;
    tipoFlag = false;
    estudianteFlag = false;
    pagos: PagoModel[] = [];
    loading = true;
    totalRegistros = 0;

    estadosEnum = [
        {
            label: 'CREADO', value: 'CREADO',
        },
        {
            label: 'VALIDADO', value: 'VALIDADO',
        },
        {
            label: 'RECHAZADO', value: 'RECHAZADO',
        }
    ]

    tiposEnum = [
        {label: 'PSE', value: 'PSE'},
        {
            label: 'Transferencia',
            value: 'TRANSFERENCIA'
        },
        {
            label: 'Tarjeta de Crédito',
            value: 'TARJETA_DE_CREDITO'
        },
        {label: 'Otro', value: 'OTRO'}
    ];

    estudiantes: EstudianteModel[] = [];

    value: EstudianteModel | { label: string, value: string } = null;

    @ViewChild('dt', {static: true}) dt: Table;

    ngOnInit(): void {
        this.getEstudiantesLazy();
    }

    constructor(private paymentService: PaymentsService,
                private messageService: MessageService,) {
    }

    getEstudiantesLazy() {
        this.paymentService.getUsuarios().subscribe({
            next: response => {
                this.estudiantes = response;
            },
            error: (error: Error) => {
                console.log(error);
            }
        })
    }

    getPagosLazy(data: TableLazyLoadEvent, endpoint?: string) {
        this.loading = true;
        if (endpoint) {
            this.endpoint = endpoint;
        }
        this.paymentService.getPagos(this.endpoint).subscribe({
            next: response => {
                this.pagos = response;
                this.totalRegistros = response.length;
                this.loading = false;
            },
            error: (error: Error) => {
                console.log(error);
                this.totalRegistros = 0;
                this.loading = false;
            }
        })
        this.endpoint = 'pagos';
    }

    exportPdf(pagoId: number) {
        this.paymentService.exportPdf(pagoId).subscribe({
            next: file => {
                const blob = new Blob([file], {type: 'application/pdf'});
                const url = window.URL.createObjectURL(blob);
                window.open(url);
            },
            error: (error: Error) => {
                console.log(error);
            }
        })
    }

    validarPago(pagoId: number) {
        this.paymentService.actualizarEstadoPago(pagoId).subscribe({
            next: () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'OK',
                    detail: `Se ha actualizado el pago`,
                });
                this.dt._filter();
            },
            error: (error: Error) => {
                console.log(error);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: `Error al actualizar ${error.message}`,
                });
            }
        })
    }

}
