export class Idioma {
    id?: number;
    nombreI: string;
    nivelI: string;
    siglasI: string;

    constructor(nombreI: string, nivelI: string, siglasI: string) {
        this.nombreI = nombreI;
        this.nivelI = nivelI;
        this.siglasI = siglasI;
    }

}
