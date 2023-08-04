import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/Modelo/factura.model';
import { FacturaService } from 'src/app/Service/factura.service';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.scss']
})
export class CrearFacturaComponent {

  factura:Factura = new Factura

  

  constructor(private router:Router, private facturaService:FacturaService){

  }
  Guardar(factura:Factura){
    this.facturaService.save(factura)
    .subscribe(data=>{
      alert("Se guardo con exito");
      this.router.navigate(["listarticket"]);
    })

  }
}
