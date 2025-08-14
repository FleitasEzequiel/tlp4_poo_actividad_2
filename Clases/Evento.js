export class Evento {
    Nombre
    Fecha
    Lugar
    Estado
    
    constructor(NOMBRE,FECHA,LUGAR) {
        this.Nombre = NOMBRE
        this.Fecha = FECHA
        this.Lugar = LUGAR
        this.Estado = "PROGRAMADO"
    }
    
    getNombre(){
        return this.Nombre
    }
    terminarEvento(){
        this.Estado = "FINALIZADO"
    }
}
