import { Injectable } from '@angular/core';
import { Cliente } from '../Modelo/cliente.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

    save(Cliente: Cliente){
      return this.http.post<any>("http://localhost:8080/ProyectoFinalParqueadero/rs/clientes/registrar", Cliente)
    }
  
    getAll(){
      return this.http.get<any>("http://localhost:8080/ProyectoFinalParqueadero/rs/clientes/listarClientes")
    }
  
    eliminar(cliente: Cliente){
      return this.http.delete<any>("http://localhost:8080/ProyectoFinalParqueadero/rs/clientes/eliminarClientes", { body: cliente });
    }
  
    actualizar(cliente: Cliente){
      return this.http.put<any>("http://localhost:8080/ProyectoFinalParqueadero/rs/clientes/actualizar", cliente);
    }

  
}
