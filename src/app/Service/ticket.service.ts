import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../Modelo/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http: HttpClient) { }
  save(ticket: Ticket){
    return this.http.post<any>("http://localhost:8080/ProyectoFinalParqueadero/rs/tickets/registrar", ticket)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/ProyectoFinalParqueadero/rs/tickets/listar")
  }

  eliminar(ticket: Ticket){
    return this.http.delete<any>("http://localhost:8080/ProyectoFinalParqueadero/rs/tickets/eliminar", { body: ticket });
  }

  actualizar(ticket: Ticket){
    return this.http.put<any>("http://localhost:8080/ProyectoFinalParqueadero/rs/tickets/actualizar", ticket);
  }

}
