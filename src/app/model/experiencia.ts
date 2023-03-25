export class Experiencia {
    id?: number;
    nombreE: string;
    descripcionE: string;
    fechaInicioE: string;
    fechaFinE?: string;
    cargoE: string;

    constructor(nombreE: string, descripcionE: string, fechaInicioE: string, fechaFinE: string, cargoE: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaInicioE = fechaInicioE;
        this.fechaFinE = fechaFinE;
        this.cargoE = cargoE;
    }
}
