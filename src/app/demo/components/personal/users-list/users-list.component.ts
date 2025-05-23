import {Component, OnInit, ViewChild} from '@angular/core';
import {EstudianteModel} from "../../../models/estudiante.model";
import {Table, TableLazyLoadEvent} from "primeng/table";
import {UsersService} from "../../../services/users/users.service";

@Component({
    selector: 'app-users-list',
    standalone: false,
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {

    constructor(private userService: UsersService) {
    }

    endpoint = 'estudiantes';
    usuarios: EstudianteModel[] = [];
    totalRegistros = 0;
    loading = true;
    programaFlag = false;
    value = '';

    @ViewChild('dt', {static: false}) dt: Table;

    ngOnInit(): void {
    }

    getUsuariosLazy(data: TableLazyLoadEvent, endpoint?: string): void {
        this.loading = true;
        if (endpoint) {
            this.endpoint = endpoint;
        }
        this.userService.getUsuariosLazy(this.endpoint).subscribe({
            next: response => {
                this.usuarios = response;
                this.totalRegistros = response.length;
                this.loading = false;
            },
            error: (error: Error) => {
                console.log(error);
                this.loading = false;
                this.endpoint = 'estudiantes';
            }
        })
        this.endpoint = 'estudiantes';
    }

}
