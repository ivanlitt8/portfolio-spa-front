export class Project {
    id?: number;
    nombreP: string;
    descripcionP: string;
    imageP: string;
    fechaInicioP: string;
    enlaceP: string;

    constructor(nombreP: string, descripcionP: string, imageP: string, fechaInicioP: string, enlaceP: string) {
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.imageP = imageP;
        this.fechaInicioP = fechaInicioP;
        this.enlaceP = enlaceP;
    }

}
