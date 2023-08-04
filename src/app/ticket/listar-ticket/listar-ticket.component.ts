import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/Modelo/ticket.model';
import { TicketService } from 'src/app/Service/ticket.service';
import { PasardatosService } from 'src/app/pasardatos.service';

@Component({
  selector: 'app-listar-ticket',
  templateUrl: './listar-ticket.component.html',
  styleUrls: ['./listar-ticket.component.scss']
})
export class ListarTicketComponent {

  listadoTickets: Ticket[] = []

  constructor(private ticketService: TicketService,
    private router: Router, private pasardatosService:PasardatosService) {
    
    console.log('listadoTickets', this.listadoTickets)
  }

  ngOnInit(): void {
 
    this.refrescarLista();
  }

  refrescarLista(){
    this.ticketService.getAll().subscribe(
      (response: Ticket[]) => {
        this.listadoTickets = response;
      },
      (error) => {
        console.error('Error al obtener la lista de vehiculos:', error);
      }
    );
  }

  editar(ticket: Ticket){
    this.pasardatosService.changeVehiculo(ticket)

   
    this.router.navigate(['editar'])
  }

  eliminar(ticket: Ticket) {
    this.ticketService.eliminar(ticket).subscribe(
      (response) => {
        console.log('Error'+response.mensaje)
        this.refrescarLista(); // refrescar la lista después de la eliminación
      },
      (error) => {
        console.log('Error'+error.error.mensaje)
      }
    );
  }
}
