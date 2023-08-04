import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/Modelo/vehiculo.model';
import { VehiculoService } from 'src/app/Service/vehiculo.service';
import { PasardatosService } from 'src/app/pasardatos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit{

  @Input() vehiculo:Vehiculo={codigo:0,marca:'',modelo:'',placa:''}
  
  constructor(private router:Router, private vehiculoService:VehiculoService, private pasardatosService:PasardatosService){

  }

  ngOnInit(): void {
    this.pasardatosService.currentVehiculo.subscribe(vehiculo => {
      if(vehiculo){
        this.vehiculo = vehiculo;
      }
    });
  }

  Editar(vehiculo:Vehiculo){
    this.vehiculoService.actualizar(vehiculo)
    .subscribe(data=>{
      alert("Se guardo con exito");
      this.router.navigate(["listar"]);
    })

  }

}
