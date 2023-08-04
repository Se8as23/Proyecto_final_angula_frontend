import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/cliente.model';
import { ClienteService } from 'src/app/Service/cliente.service';
import { PasardatosService } from 'src/app/pasardatos.service';

@Component({
  selector: 'app-editarcliente',
  templateUrl: './editarcliente.component.html',
  styleUrls: ['./editarcliente.component.scss']
})
export class EditarclienteComponent implements OnInit {
 
  
  @Input() cliente:Cliente={codigo:0,cedula:'',nombre:'',apellido:'',direccion:'',telefono:''}
  
  constructor(private router:Router, private clienteService:ClienteService, private pasardatosService:PasardatosService){

  }

  ngOnInit(): void {
    this.pasardatosService.currentCliente.subscribe(cliente => {
      if(cliente){
        this.cliente = cliente;
      }
    });
  }

  Editar(cliente:Cliente){
    this.clienteService.actualizar(cliente)
    .subscribe(data=>{
      alert("Se guardo con exito");
      this.router.navigate(["listarclientec"]);
    })

  }
}
