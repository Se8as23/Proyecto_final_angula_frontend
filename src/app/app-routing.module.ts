import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { VehiculoComponent } from './paginas/vehiculo/vehiculo.component';
import { TicketComponent } from './paginas/ticket/ticket.component';
import { TarifaComponent } from './paginas/tarifa/tarifa.component';
import { FacturaComponent } from './paginas/factura/factura.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ListarComponent } from './vehiculo/listar/listar.component';
import { AgregarComponent } from './vehiculo/agregar/agregar.component';
import { EditarComponent } from './vehiculo/editar/editar.component';
import { ListarclienteComponent } from './cliente/listarcliente/listarcliente.component';
import { AgregarclienteComponent } from './cliente/agregarcliente/agregarcliente.component';
import { CrearTicketComponent } from './ticket/crear-ticket/crear-ticket.component';
import { ListarTicketComponent } from './ticket/listar-ticket/listar-ticket.component';
import { ListarcComponent } from './cliente/listarc/listarc.component';
import { EditarclienteComponent } from './cliente/editarcliente/editarcliente.component';
import { CrearFacturaComponent } from './factura/crear-factura/crear-factura.component';
import { ListarFacturaComponent } from './factura/listar-factura/listar-factura.component';

const routes: Routes = [
  {path: '', redirectTo: '/paginas/inicio', pathMatch: 'full' },
  {path:"paginas/inicio",component: InicioComponent},

  {path:'',redirectTo:'/paginas/vehiculo', pathMatch: 'full'},
  {path:"paginas/vehiculo",component: VehiculoComponent},

  {path:'',redirectTo:'/paginas/ticket', pathMatch: 'full'},
  {path:"paginas/ticket",component: TicketComponent},

  {path:'',redirectTo:'/paginas/tarifa', pathMatch: 'full'},
  {path:"paginas/tarifa",component: TarifaComponent},

  {path:'',redirectTo:'/paginas/factura', pathMatch: 'full'},
  {path:"paginas/factura",component: FacturaComponent},

  {path:'',redirectTo:'/paginas/cliente', pathMatch: 'full'},
  {path:"paginas/cliente",component: ClienteComponent},

  {path:'listar', component:ListarComponent},
  {path:'agregar', component:AgregarComponent},
  {path:'editar', component:EditarComponent},

  {path:'listarcliente', component:ListarclienteComponent},
  {path:'agregarcliente', component:AgregarclienteComponent},
  {path:'listarclientec', component:ListarcComponent},
  {path:'editarcliente', component:EditarclienteComponent},


  {path:'listarticket', component: ListarTicketComponent},
  {path:'agregarticket', component:CrearTicketComponent},
  
  {path:'crearfactura', component:CrearFacturaComponent },
  {path:'listarfactura', component:ListarFacturaComponent},


];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
