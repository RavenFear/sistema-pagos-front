import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EstudianteModel} from "../../models/estudiante.model";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient) {

    }

    saveEstudiante(estudiante: EstudianteModel): Observable<EstudianteModel> {
        return this.http.post<EstudianteModel>(`${environment.apiUrl}/crear-estudiante`, estudiante).pipe(
            catchError((error) => {
                return throwError(() => error);
            })
        )
    }

    getUsuariosLazy(endpoint: string): Observable<EstudianteModel[]> {
        return this.http.get<EstudianteModel[]>(`${environment.apiUrl}/${endpoint}`).pipe(
            map((response) => {
                return response.map(estudiante => ({
                    ...estudiante
                }));
            }),
            catchError((error) => {
                return throwError(() => error);
            })
        );
    }

}
