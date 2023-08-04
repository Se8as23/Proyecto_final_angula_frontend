import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../Modelo/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/ProyectoFinalParqueadero/rs/vehiculo';
  getVehiculos(){
    return this.http.get<Vehiculo[]>(this.Url);
  }

  createVehiculo(vehiculo:Vehiculo){
    return this.http.post<Vehiculo>(this.Url,vehiculo);

  }
}
