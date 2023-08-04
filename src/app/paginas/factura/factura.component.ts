import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent {

  
  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listarfactura"]);

  };

  Nuevo(){
    this.router.navigate(["crearfactura"]);

  }
}
