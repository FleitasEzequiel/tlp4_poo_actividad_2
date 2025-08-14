import { Evento } from "./Evento.js"

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
}