import { Cliente } from "./cliente.model";
import { Vehiculo } from "./vehiculo.model";

export class Ticket{
    codigo?: number;
    horaEntrada?:string;
    horaSalida?:string;
    cliente?:Cliente;
    vehiculo?:Vehiculo;
}