export class Servicio {
    id?: number;
    nombreS: string;
    descripcionS: string;
    imageS: string;

    constructor(nombreS: string, descripcionS: string, imageS: string) {
        this.nombreS = nombreS;
        this.descripcionS = descripcionS;
        this.imageS = imageS;
    }

}
