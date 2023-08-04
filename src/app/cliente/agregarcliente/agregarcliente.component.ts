import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/cliente.model';
import { ClienteService } from 'src/app/Service/cliente.service';

@Component({
  selector: 'app-agregarcliente',
  templateUrl: './agregarcliente.component.html',
  styleUrls: ['./agregarcliente.component.scss']
})
export class AgregarclienteComponent {

  cliente:Cliente = new Cliente

  

  constructor(private router:Router, private clienteService:ClienteService){

  }
  Guardar(cliente:Cliente){
    this.clienteService.save(cliente)
    .subscribe(data=>{
      alert("Se guardo con exito");
      this.router.navigate(["listarclientec"]);
    })

  }
}
