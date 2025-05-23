import {EstudianteModel} from "./estudiante.model";

export interface PagoModel {
    id: string;
    fecha: string | Date;
    file: string;
    monto: number;
    status: number;
    type: number;
    estudiante_id: string;
    codigoEstudiante?: string;
    date?: string;
    estudiante?: EstudianteModel;
}
