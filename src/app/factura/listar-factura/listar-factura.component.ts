import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/Modelo/factura.model';
import { FacturaService } from 'src/app/Service/factura.service';
import { PasardatosService } from 'src/app/pasardatos.service';

@Component({
  selector: 'app-listar-factura',
  templateUrl: './listar-factura.component.html',
  styleUrls: ['./listar-factura.component.scss']
})
export class ListarFacturaComponent {

  listadoFactura: Factura[] = []

  constructor(private facturaService: FacturaService,
    private router: Router, private pasardatosService:PasardatosService) {
    
    console.log('listadoFactura', this.listadoFactura)
  }

  ngOnInit(): void {
 
    this.refrescarLista();
  }

  refrescarLista(){
    this.facturaService.getAll().subscribe(
      (response: Factura[]) => {
        this.listadoFactura = response;
      },
      (error) => {
        console.error('Error al obtener la lista de Facturas:', error);
      }
    );
  }

  editar(factura: Factura){
    this.pasardatosService.changeFactura(factura)
    this.router.navigate(['editarfactura'])
  }

  eliminar(factura: Factura) {
    this.facturaService.eliminar(factura).subscribe(
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
