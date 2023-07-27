import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { vehiculo } from '../domain/vehiculo';


@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http:HttpClient) { }

   save(vehiculo: vehiculo){

    return this.http.post<any>("http://localhost:8080/practica1SP/rs/clientes",vehiculo)
    
  }

  update(vehiculo:vehiculo){
    return this.http.post<any>("http://localhost:8080/practica1SP/rs/clientes",vehiculo)
    
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/practica1SP/rs/clientes/all")
  }

  delete(vehiculo: vehiculo){
    return this.http.delete("http://localhost:8080/practica1SP/rs/clientes/delete/"+vehiculo.idVehiculo)
  }
}
