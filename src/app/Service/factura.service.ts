import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from '../Modelo/factura.model';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) { }
  save(vehiculo: Factura){
    return this.http.post<any>("http://localhost:8080/ProyectoFinalParqueadero/rs/Factura/registrar", vehiculo)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/ProyectoFinalParqueadero/rs/Factura/listarFactura")
  }

  eliminar(vehiculo: Factura){
    return this.http.delete<any>("http://localhost:8080/ProyectoFinalParqueadero/rs/Factura/eliminar", { body: vehiculo });
  }

  actualizar(vehiculo: Factura){
    return this.http.put<any>("http://localhost:8080/ProyectoFinalParqueadero/rs/Factura/actualizar", vehiculo);
  }



}
