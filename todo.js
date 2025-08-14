import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { Equipo, Evento, Partido, Torneo } from './app.js';
let EQUIPOS = [new Equipo("POLO FC","Horacio"), new Equipo("UTN", "Juanito")
]
let EVENTOS = [new Torneo("POLO MUNDIAL")]
class Aplicacion {
    ACTIVO

    constructor(){
        this.ACTIVO = true
    }

    apagarPrograma() {this.ACTIVO = false}
}

const App = new Aplicacion()
const rl = readline.createInterface({ input, output });
async function crearEquipo(){
    const nombreEquipo = await rl.question('Nombre del Equipo: ')
    const nombreDT = await rl.question('Nombre del Director Técnico: ')
    return new Equipo(nombreEquipo,nombreDT)
}
async function crearPartido(EQUIPOLOCAL,EQUIPOVISITANTE){
    return new Partido(EQUIPOLOCAL,EQUIPOVISITANTE)
}


while (App.ACTIVO) {
    const opcion = await rl.question('1. Para crear un Equipo \n2. Ver Equipos \n3. Simular Partido \n4. Crear Eventos \n5. Ver Eventos')

    switch (parseInt(opcion)) {
        case (1):
            const nuevoEquipo = await crearEquipo()
            EQUIPOS.push(nuevoEquipo)
            break
        case (2):
            console.log("\n- - - - - - - - - - - - - - -")
            EQUIPOS.forEach((equipo,index) => {
                console.log(`${index}.${equipo.getNombre()}`)
            });
            console.log("- - - - - - - - - - - - - - - \n")
            break;
        case (3):
            const EQUIPO1 = await rl.question("Número del Equipo ").then((n)=>EQUIPOS[parseInt(n)] )
            const EQUIPO2 = await rl.question("Número del Equipo ").then((n)=>EQUIPOS[parseInt(n)])
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
            EVENTOS.push(EVENTO)
            break;
        case (5):
            if (EVENTOS.length < 1){
                console.log("----------------------- \n  No hay eventos \n-----------------------")
                break
            }
            EVENTOS.forEach((evento,index) => {
            console.log("\n- - - - - - - - - - - - - - -")
                console.log(`${index}.${evento.getNombre()}`)
            console.log("\n- - - - - - - - - - - - - - -")

            });
            break;
        // case (6):
        //     console.log("Terminando programa")
        //     App.apagarPrograma()
        //     break;
        case (6):
            const evento = await rl.question("Número del Evento").then((n)=>EVENTOS[parseInt(n)])
            if (evento === undefined){
                console.log("No se encontró el evento")
                break
            }
            
    
        default:
            console.log("nao nao")
            break;
    }
}
rl.close();
