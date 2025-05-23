import {Component, OnInit} from '@angular/core';
import {EstudianteModel} from "../../../models/estudiante.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../services/users/users.service";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-create-update-user-dialog',
    standalone: false,
    templateUrl: './create-update-user-dialog.component.html',
    styleUrl: './create-update-user-dialog.component.scss'
})
export class CreateUpdateUserDialogComponent implements OnInit {

    display: boolean = true;
    alumno: EstudianteModel = null;
    form: FormGroup;

    constructor(private fb: FormBuilder,
                private userService: UsersService,
                private messageService: MessageService) {
        this.createForm();
    }

    createForm() {
        this.form = this.fb.group({
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            codigo: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
            programaId: [null, Validators.required],
            foto: [null]
        })
    }

    ngOnInit() {

    }

    hideDialog() {
        this.form.reset();
    }

    saveAlumno() {
        this.userService.saveEstudiante(this.form.getRawValue()).subscribe({
            next: () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'OK',
                    detail: `Se ha registrado el usuario`,
                });
                this.hideDialog();
            },
            error: (error: Error) => {
                console.log(error);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: `Error al registrar ${error.message}`,
                });
            }
        })
    }

}
