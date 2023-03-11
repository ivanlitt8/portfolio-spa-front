export class Skill {
    id?: number;
    nombreSk: string;
    porcentajeSk: number;
    imageSk?: string;

    constructor(nombreSk: string, porcentajeSk: number, imageSk: string) {
        this.nombreSk = nombreSk;
        this.porcentajeSk = porcentajeSk;
        this.imageSk = imageSk;
    }

}