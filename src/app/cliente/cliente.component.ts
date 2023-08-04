import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {

  constructor(private router:Router){}
  Listar(){
    this.router.navigate(["listarclientec"]);

  };

  Nuevo(){
    this.router.navigate(["agregarcliente"]);

  }
}
