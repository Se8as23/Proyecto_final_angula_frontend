import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { VehiculoComponent } from './paginas/vehiculo/vehiculo.component';
import { TicketComponent } from './paginas/ticket/ticket.component';
import { TarifaComponent } from './paginas/tarifa/tarifa.component';
import { FactoryTarget } from '@angular/compiler';
import { FacturaComponent } from './paginas/factura/factura.component';

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
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
