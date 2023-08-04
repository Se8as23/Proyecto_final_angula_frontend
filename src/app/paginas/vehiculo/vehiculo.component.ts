import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent {

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);

  };

  Nuevo(){
    this.router.navigate(["agregar"]);

  }

};




