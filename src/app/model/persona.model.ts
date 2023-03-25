export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    posicion: String;
    ubicacion: String;
    sobreMi: String;
    img: String;

    constructor(nombre: String, apellido: String, posicion: String, ubicacion: String, img: String, sobreMi: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.posicion = posicion;
        this.ubicacion = ubicacion;
        this.sobreMi = sobreMi;
        this.img = img; 
    }
}