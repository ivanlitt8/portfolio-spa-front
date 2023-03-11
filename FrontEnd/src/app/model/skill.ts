export class Skill {
    id?: number;
    nombreSk: string;
    typeSk: string;
    porcentajeSk: number;
    imageSk?: string;

    constructor(nombreSk: string, typeSk: string, porcentajeSk: number, imageSk: string) {
        this.nombreSk = nombreSk;
        this.typeSk = typeSk;
        this.porcentajeSk = porcentajeSk;
        this.imageSk = imageSk;
    }

}