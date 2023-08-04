import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vehiculo } from './Modelo/vehiculo.model';
import { Cliente } from './Modelo/cliente.model';
import { Ticket } from './Modelo/ticket.model';
import { Factura } from './Modelo/factura.model';

@Injectable({
  providedIn: 'root'
})
export class PasardatosService {
  private vehiculoSource = new BehaviorSubject<Vehiculo | null>(null);
  private clienteSource = new BehaviorSubject<Cliente | null>(null);
  private ticketSource = new BehaviorSubject<Ticket | null>(null);
  private facturaSource = new BehaviorSubject<Ticket | null>(null);
 

  currentVehiculo = this.vehiculoSource.asObservable();
  currentCliente = this.clienteSource.asObservable();
  currentTicket = this.ticketSource.asObservable();
  currentFactura = this.ticketSource.asObservable();

 

  constructor() { }
  changeVehiculo(vehiculo: Vehiculo) {
    this.vehiculoSource.next(vehiculo);
  }

  changeCliente(cliente: Cliente){
    this.clienteSource.next(cliente);
  }

  changeTicket(ticket: Ticket){
    this.ticketSource.next(ticket);
  }

  changeFactura(factura: Factura){
    this.ticketSource.next(factura);
  }
}
