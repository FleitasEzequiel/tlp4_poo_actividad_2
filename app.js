import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { Equipo } from './Clases/Equipo.js';
import { Evento } from './Clases/Evento.js';
import {Partido } from "./Clases/Partido.js"
import {Torneo} from "./Clases/Torneo.js"
import { randomInt } from 'node:crypto';
// import { Equipo, Evento, Partido, Torneo } from './clases.js';

class Aplicacion {
    EQUIPOS
    ACTIVO
    EVENTOS
    TORNEOS
    
    constructor(){
        this.ACTIVO = true
        //Estos son datos de ejemplos
        this.EQUIPOS = [new Equipo("POLO FC","Horacio"), new Equipo("UTN", "Juanito")] 
        this.EVENTOS = [new Torneo("POLO MUNDIAL","Mañana","En el polo")]  
    }
    getEquipos() {return this.EQUIPOS}
    añadirEquipo(EQUIPO) {this.EQUIPOS.push(EQUIPO)}
    terminarEvento() {this.ACTIVO = false}
    getEventos() {return this.EVENTOS}
    añadirEvento(EVENTO){ this.EVENTOS.push((EVENTO))}
}

const App = new Aplicacion()
const rl = readline.createInterface({ input, output });
async function crearEquipo(){
    const nombreEquipo = await rl.question('Nombre del Equipo: ')
    const nombreDT = await rl.question('Nombre del Director Técnico: ')
    if (nombreEquipo.trim() == ""){
        console.log("El campo no puede estar vacío.")
        return 
    }
    if (nombreDT.trim() == ""){
        console.log("El campo no puede estar vacío.")
        return 
    }
    return new Equipo(nombreEquipo,nombreDT)
}
async function crearPartido(EQUIPOLOCAL,EQUIPOVISITANTE){
    if ((EQUIPOLOCAL === undefined) || (EQUIPOVISITANTE === undefined) ){
        console.log("Uno de los equipos está indefinido")
        return
    }
    return new Partido(EQUIPOLOCAL,EQUIPOVISITANTE)
}


while (App.ACTIVO) {
    const opcion = await rl.question('1. Para crear un Equipo \n2. Ver Equipos \n3. Simular Partido \n4. Crear Eventos \n5. Ver Eventos \n6. Empezar Evento \n');
    switch (parseInt(opcion)) {
        case (1):
            const nuevoEquipo = await crearEquipo()
            App.añadirEquipo(nuevoEquipo)
            break
        case (2):
            console.log("\n- - - - - - - - - - - - - - -");
            (App.getEquipos()).forEach((equipo,index) => {
                console.log(`${index}.${equipo.getNombre()}`)
            });
            console.log("- - - - - - - - - - - - - - - \n")
            break;
        case (3):
            const EQUIPO1 = await rl.question("Número del Equipo ").then((n)=>(App.getEquipos())[parseInt(n)] )
            const EQUIPO2 = await rl.question("Número del Equipo ").then((n)=>(App.getEquipos())[parseInt(n)])
            if ((EQUIPO1 === undefined) || (EQUIPO2 === undefined)) {
            console.log("No se encontró el equipo.")
            break}
            const partido = await crearPartido(EQUIPO1,EQUIPO2)
            console.log(partido.simularPartido())
            break;
        case (4):
            const nombre = await rl.question("Nombre del Evento: ")
            const fecha = await rl.question("Fecha: ")
            const lugar = await rl.question("Lugar: ")
            const EVENTO = new Evento(nombre,fecha,lugar)
            App.añadirEvento(EVENTO)
            break;
        case (5):
            if ((App.getEventos()).length < 1){
                console.log("----------------------- \n  No hay eventos \n-----------------------")
                break;
            };
            console.log("\n- - - - - - - - - - - - - - -");
            (App.getEventos()).forEach((evento,index) => {
                console.log(`${index}.${evento.getNombre()}`)
            });
            console.log("\n- - - - - - - - - - - - - - -")
            break;
        case (6):
            const evento = await rl.question("Número del Evento: ").then((n)=>(App.getEventos())[parseInt(n)])
            if (evento === undefined){
                console.log("No se encontró el evento")
                break
            }
            await fnEvento(evento)
            break;
        default:
            console.log("Elija una opción de las anteriores enumeradas")
            break;
    }
}
rl.close();

async function fnEvento(evento){
    while(!evento.getEstado()){
const opcion = await rl.question("OPCIONES DE EVENTOS: \n1. TERMINAR EVENTO \n2. AGREGAR EQUIPO \n3. VER EQUIPOS \n4. SIMULAR EVENTO \n  ")
        switch (parseInt(opcion)) {
            case 1:
                evento.terminarEvento()
                break;
            case 2:
                console.log("AÑADIR EQUIPO")
                const equipo = await rl.question("N° DE EQUIPO: ").then((n)=>(App.getEquipos())[parseInt(n)] )
                evento.agregarEquipo(equipo)
                break
            case 3:
                if ((evento.getEquipos()).length < 1){
                    console.log("\n- - - - - - - - - - - - - - -")
                    console.log("No se encontró ningún equipo")
                    console.log("\n- - - - - - - - - - - - - - -")
                    break;
                }
            console.log("EQUIPOS:")
            console.log("\n- - - - - - - - - - - - - - -");
            (evento.getEquipos()).forEach((equipo,index) => {
                console.log(`${index}.${equipo.getNombre()}`)
            });
            console.log("\n- - - - - - - - - - - - - - -")
            break;
            case 4:
            let datos = {};
            (evento.getEquipos()).forEach((equipo,index) => {
                datos[equipo.getNombre()] = randomInt(15)
            });
            console.log("RESULTADOS")
            for (const equipo in datos) {
                console.log(` EQUIPO: ${equipo} // PUNTOS: ${datos[equipo]}`)
            }
            break;
            default:
                return
                break;
        }
    }
    return
}