import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/cliente.model';
import { ClienteService } from 'src/app/Service/cliente.service';
import { PasardatosService } from 'src/app/pasardatos.service';

@Component({
  selector: 'app-listarc',
  templateUrl: './listarc.component.html',
  styleUrls: ['./listarc.component.scss']
})
export class ListarcComponent implements OnInit{

  listadoCliente: Cliente[] = []

  constructor(private clienteService: ClienteService,
    private router: Router, private pasardatosService:PasardatosService) {
    
    console.log('listadoCliente', this.listadoCliente)
  }

  ngOnInit(): void {
 
    this.refrescarLista();
  }

  refrescarLista(){
    this.clienteService.getAll().subscribe(
      (response: Cliente[]) => {
        this.listadoCliente = response;
      },
      (error) => {
        console.error('Error al obtener la lista de vehiculos:', error);
      }
    );
  }

  editar(cliente: Cliente){
    this.pasardatosService.changeCliente(cliente)
    this.router.navigate(['editarcliente'])
  }

  eliminar(cliente: Cliente) {
    this.clienteService.eliminar(cliente).subscribe(
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
