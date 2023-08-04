import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../Modelo/vehiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {


  constructor(private http: HttpClient) { }
  save(vehiculo: Vehiculo){
    return this.http.post<any>("http://localhost:8080/ProyectoFinalParqueadero/rs/vehiculo/registrar", vehiculo)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/ProyectoFinalParqueadero/rs/vehiculo/listarVehiculos")
  }

  eliminar(vehiculo: Vehiculo){
    return this.http.delete<any>("http://localhost:8080/ProyectoFinalParqueadero/rs/vehiculo/eliminarVehiculos", { body: vehiculo });
  }

  actualizar(vehiculo: Vehiculo){
    return this.http.put<any>("http://localhost:8080/ProyectoFinalParqueadero/rs/vehiculo/actualizar", vehiculo);
  }



  

}