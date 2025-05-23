import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PaymentsService} from "../../../services/payments/payments.service";
import {EstudianteModel} from "../../../models/estudiante.model";
import {MessageService} from "primeng/api";
import {FileSelectEvent, FileUpload} from "primeng/fileupload";

@Component({
    selector: 'app-create-payment-dialog',
    standalone: false,
    templateUrl: './create-payment-dialog.component.html',
    styleUrl: './create-payment-dialog.component.scss'
})
export class CreatePaymentDialogComponent implements OnInit {

    form: FormGroup;
    metodosPago = [
        {label: 'PSE', value: 'PSE', url: 'assets/layout/images/dashboard-banking/asset-pse.png'},
        {
            label: 'Transferencia',
            value: 'TRANSFERENCIA',
            url: 'assets/layout/images/dashboard-banking/icon-receivemoney.png'
        },
        {
            label: 'Tarjeta de Crédito',
            value: 'TARJETA_DE_CREDITO',
            url: 'assets/layout/images/dashboard-banking/asset-visa.png'
        },
        {label: 'Otro', value: 'OTRO', url: 'assets/layout/images/dashboard-banking/icon-cardtransfer.png'}
    ];
    estudiantes: EstudianteModel[] = [];

    uploadedFile: FormData = new FormData();

    @ViewChild('FileUpload')
    FileUpload: FileUpload;

    constructor(private fb: FormBuilder,
                private paymentService: PaymentsService,
                private messageService: MessageService) {
        this.createForm();
    }

    ngOnInit() {
        this.getEstudiantes()
    }

    getEstudiantes() {
        this.paymentService.getUsuarios().subscribe({
            next: response => {
                this.estudiantes = response;
            },
            error: (error: Error) => {
                console.log(error);
            }
        })
    }

    createForm() {
        this.form = this.fb.group({
            date: [{value: new Date(), disabled: true}, Validators.required],          // Fecha de la transacción
            file: [null],                                // Campo para archivo, opcional si se maneja desde el backend
            monto: [0, [Validators.required, Validators.min(0)]],
            type: [null, Validators.required],           // Medio de pago (dropdown con valores estáticos)
            codigoEstudiante: ['', Validators.required]
        })
    }


    savePago() {

        const dateValue = this.form.get('date').value; // Puede ser Date o String
        const formattedDate = dateValue instanceof Date
            ? dateValue.toISOString().split('T')[0] // 'YYYY-MM-DD'
            : dateValue;

        this.uploadedFile.append('monto', this.form.get('monto').value.toString());
        this.uploadedFile.append('type', this.getTipoDePago().value); // O el nombre del Enum
        this.uploadedFile.append('date', formattedDate);
        this.uploadedFile.append('codigoEstudiante', this.form.get('codigoEstudiante').value);

        console.log(this.uploadedFile.getAll('file'));


        this.paymentService.savePago(this.uploadedFile).subscribe({
            next: () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'OK',
                    detail: `Se ha registrado el pago`,
                });
                this.FileUpload.clear();
                this.form.reset();
            },
            error: (error: Error) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: `Error al registrar ${error.message}`,
                });
            }
        })
    }

    getTipoDePago() {
        return this.metodosPago.find(s => s.value === this.form.value.type);
    }

    onUpload(data: FileSelectEvent) {
        data.currentFiles.forEach((file: File) => {
            this.uploadedFile.append('file', file, file.name);
        });
    }

}
