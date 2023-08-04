import { Cliente } from "./cliente.model";
import { Vehiculo } from "./vehiculo.model";
import { Tarifa } from "./tarifa.model";
import { Ticket } from "./ticket.model";

export class Factura{
    codigo?: number;
    fechaFactura?:string;
    total?:number;
    cliente?:Cliente;
    ticket?:Ticket;
    tarifa?:Tarifa;
}