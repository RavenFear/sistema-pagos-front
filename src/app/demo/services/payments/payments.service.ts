import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {catchError, Observable, throwError} from "rxjs";
import {EstudianteModel} from "../../models/estudiante.model";
import {map} from "rxjs/operators";
import {PagoModel} from "../../models/pago.model";

@Injectable({
    providedIn: 'root'
})
export class PaymentsService {

    constructor(private http: HttpClient) {
    }

    getUsuarios(): Observable<EstudianteModel[]> {
        return this.http.get<EstudianteModel[]>(`${environment.apiUrl}/estudiantes`).pipe(
            map((response) => {
                return response.map(estudiante => ({
                    ...estudiante,
                    label: estudiante.nombre + ' ' + estudiante.apellido,
                    value: estudiante.id
                }));
            }),
            catchError((error) => {
                return throwError(() => error);
            })
        );
    }

    savePago(pago: FormData): Observable<PagoModel> {
        return this.http.post<PagoModel>(`${environment.apiUrl}/pagos`, pago).pipe(
            catchError((error) => {
                return throwError(() => error);
            })
        )
    }

    getPagos(endpoint?: string): Observable<PagoModel[]> {
        return this.http.get<PagoModel[]>(`${environment.apiUrl}/${endpoint}`).pipe(
            catchError((error) => {
                return throwError(() => error);
            })
        )
    }

    exportPdf(pagoId: number): Observable<Blob> {
        return this.http.get(`${environment.apiUrl}/pagoFile/${pagoId}`, {
            responseType: 'blob'
        });
    }

    actualizarEstadoPago(pagoId: number): Observable<PagoModel> {
        return this.http.put<PagoModel>(`${environment.apiUrl}/pagos/${pagoId}/actualizarPago`, {
            valor: 'VALIDADO'
        }).pipe(
            catchError((error) => {
                return throwError(() => error);
            })
        )
    }

}
