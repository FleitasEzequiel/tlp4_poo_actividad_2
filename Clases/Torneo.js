import { Evento } from "./Evento.js"

export class Torneo extends Evento{
    #Equipos
    #Partidos 
    #Posiciones

    constructor(Nombre, Fecha, Lugar, EQUIPOS,PARTIDOS){
        super(Nombre,Fecha,Lugar)
        this.#Equipos = EQUIPOS || []
        this.#Partidos = PARTIDOS
    }

    agregarEquipo(EQUIPO){
        this.#Equipos.push(EQUIPO)
    }
    getEquipos(){
        return this.#Equipos
    }
    simularTorneo(){

    }
}