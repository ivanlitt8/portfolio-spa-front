export class Education {
    id?: number;
    nombreE: string;
    descripcionE: string;
    fechaInicioE: string;
    fechaFinE?: string;
    imagenE?: string;

    constructor(nombreE: string, descripcionE: string, fechaInicioE: string, fechaFinE: string, imagenE: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaInicioE = fechaInicioE;
        this.fechaFinE = fechaFinE;
        this.imagenE = imagenE;
    }

}
