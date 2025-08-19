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
    getFecha(){
        return this.Fecha
    }
    getLugar(){
        return this.Lugar
    }
    getEstado(){
        return this.Estado == "FINALIZADO" 
    }
    terminarEvento(){
        this.Estado = "FINALIZADO"
    }
}
