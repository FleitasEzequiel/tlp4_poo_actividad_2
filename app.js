
class Evento {
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
    
    iniciar(){
        this.Estado = "JUGANDO"
    }

    finalizar(){
        this.Estado = "FINALIZADO"
    }
    mostrar_info(){
        return {Nombre:this.Nombre,Fecha:this.Fecha,Lugar:this.Lugar,Estado:this.Estado}
    }

}
class Torneo extends Evento{
    Equipos
    Partidos 
    Posiciones
    ReglasPuntajes

    constructor(EQUIPOS,PARTIDOS,POSICIONES,REGLASPUNTAJES){
        this.Equipos = EQUIPOS
        this.Partidos = PARTIDOS
        this.Posiciones = POSICIONES
        this.ReglasPuntajes = REGLASPUNTAJES
    }

    agregarEquipo(){

    }
    programaPartido(){

    }
    mostrarResultado(){

    }
    actualizarPosiciones(){

    }
    mostrarPosiciones(){

    }
}
class Partido extends Evento{
    LOCAL 
    VISITANTE
    constructor(NOMBRE,FECHA,LUGAR,ESTADO){
        super(NOMBRE,FECHA,LUGAR,ESTADO)
    }
}  
class Equipo {
    NOMBRE
    JUGADORES
    ENTRENADOR
    ESTADISTICAS
    constructor(NOMBRE,JUGADORES,ENTRENADOR,LOCALIDAD){
        this.NOMBRE = NOMBRE
        this.JUGADORES = JUGADORES
        this.ENTRENADOR = ENTRENADOR
        this.LOCALIDAD = LOCALIDAD
        this.ESTADISTICAS = 0
        this.PARTIDOS_GANADOS = 0
    }
    agregarJugadores(JUGADOR){
        this.JUGADORES.push(JUGADOR)
    }
    eliminarJugadores(JUGADOR){
        this.JUGADORES.splice()
    }
}

class Jugador{
    Nombre 
    Apellido
    Equipo
    constructor(NOMBRE,APELLIDO,DNI,LOCALIDAD,FECHANACIMIENTO,EQUIPO){
        this.Nombre = NOMBRE
        this.Apellido = APELLIDO
        this.equipo = EQUIPO
    }
}
class Estadística {
    PartidosJugados
    PartidosGanados
    PartidosPerdidos
    Empates
}


































..............

const POLO_FC = new Equipo("POLO FC",["Maxi","Maxi","Tobi","Tobi","Lucas","Lucas"],"Mateo Goodaracco","POLO",)
console.log(POLO_FC)