import { randomInt } from "node:crypto"
import { setInterval } from "node:timers/promises"


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