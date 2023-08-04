import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Vehiculo } from 'src/app/Modelo/vehiculo.model';
import { VehiculoService } from 'src/app/Service/vehiculo.service';
import { PasardatosService } from 'src/app/pasardatos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {


listadoVehiculos: Vehiculo[] = []

  constructor(private vehiculoService: VehiculoService,
    private router: Router, private pasardatosService:PasardatosService) {
    
    console.log('listadoVehiculos', this.listadoVehiculos)
  }

  ngOnInit(): void {
 
    this.refrescarLista();
  }

  refrescarLista(){
    this.vehiculoService.getAll().subscribe(
      (response: Vehiculo[]) => {
        this.listadoVehiculos = response;
      },
      (error) => {
        console.error('Error al obtener la lista de vehiculos:', error);
      }
    );
  }

  editar(vehiculo: Vehiculo){
    this.pasardatosService.changeVehiculo(vehiculo)

   
    this.router.navigate(['editar'])
  }

  eliminar(vehiculo: Vehiculo) {
    this.vehiculoService.eliminar(vehiculo).subscribe(
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
