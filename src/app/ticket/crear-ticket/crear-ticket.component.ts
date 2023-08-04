import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/Modelo/ticket.model';
import { TicketService } from 'src/app/Service/ticket.service';

@Component({
  selector: 'app-crear-ticket',
  templateUrl: './crear-ticket.component.html',
  styleUrls: ['./crear-ticket.component.scss']
})
export class CrearTicketComponent {

  ticket:Ticket = new Ticket

  

  constructor(private router:Router, private ticketService:TicketService){

  }
  Guardar(ticket:Ticket){
    this.ticketService.save(ticket)
    .subscribe(data=>{
      alert("Se guardo con exito");
      this.router.navigate(["listarticket"]);
    })

  }
}
