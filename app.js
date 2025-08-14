import { randomInt } from "node:crypto"
import { setInterval } from "node:timers/promises"

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
export class Torneo extends Evento{
    #Equipos
    #Partidos 
    #Posiciones
    // #ReglasPuntajes

    constructor(Nombre, Fecha, Lugar, EQUIPOS,PARTIDOS,POSICIONES,REGLASPUNTAJES){
        super(Nombre,Fecha,Lugar)
        this.#Equipos = EQUIPOS || []
        this.#Partidos = PARTIDOS
    }

    agregarEquipo(EQUIPO){
        this.Equipos.push(EQUIPO)
    }
    simularTorneo(){

    }
}
export class Partido {
    LOCAL 
    VISITANTE
    constructor(LOCAL,VISITANTE,NOMBRE,FECHA,LUGAR,ESTADO){
        this.LOCAL = LOCAL
        this.VISITANTE = VISITANTE
    }
    simularPartido(){
        const puntosLocal = randomInt(5)
        const puntosVisitante = randomInt(5) 
        if (puntosLocal > puntosVisitante){
            return `GANÓ EL EQUIPO LOCAL ${this.LOCAL.getNombre()} (${puntosLocal}) ANTE ${this.VISITANTE.getNombre()} (${puntosVisitante})`
        }
        if (puntosLocal < puntosVisitante){
            return `GANÓ EL EQUIPO VISITANTE ${this.VISITANTE.getNombre()} (${puntosVisitante}) ANTE ${this.LOCAL.getNombre()} (${puntosLocal})`
        }
        return `EMPATE DE ${this.VISITANTE.getNombre()} Y ${this.LOCAL.getNombre()} DE ${puntosLocal} PUNTOS`
    }
}  
export class Equipo {
    #NOMBRE
    #ENTRENADOR
    // ESTADISTICAS
    constructor(NOMBRE,ENTRENADOR){
        this.#NOMBRE = NOMBRE
        this.ENTRENADOR = ENTRENADOR
        this.ESTADISTICAS = new Estadística
    }
    getNombre() {return this.#NOMBRE}
}
class Estadística {
    PartidosJugados
    PartidosGanados
    PartidosPerdidos
    Empates

    constructor(){
        this.PartidosGanados = 0
        this.PartidosJugados = 0
        this.PartidosPerdidos = 0
        this.Empates = 0
    }
}

// const POLOFC = new Equipo("POLO FUTBOL CLUB","Eze")
// console.log(POLOFC)

