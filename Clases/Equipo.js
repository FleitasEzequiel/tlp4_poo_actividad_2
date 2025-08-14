export class Equipo {
    #NOMBRE
    #ENTRENADOR
    constructor(NOMBRE,ENTRENADOR){
        this.#NOMBRE = NOMBRE
        this.ENTRENADOR = ENTRENADOR
    }
    getNombre() {return this.#NOMBRE}
}