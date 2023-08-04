import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/Modelo/vehiculo.model';
import { VehiculoService } from 'src/app/Service/vehiculo.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  vehiculo:Vehiculo = new Vehiculo

  

  constructor(private router:Router, private vehiculoService:VehiculoService){

  }
  Guardar(vehiculo:Vehiculo){
    this.vehiculoService.save(vehiculo)
    .subscribe(data=>{
      alert("Se guardo con exito");
      this.router.navigate(["listar"]);
    })

  }
}
