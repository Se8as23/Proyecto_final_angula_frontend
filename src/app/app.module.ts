import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';
import { VehiculoComponent } from './paginas/vehiculo/vehiculo.component';
import { TicketComponent } from './paginas/ticket/ticket.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { TarifaComponent } from './paginas/tarifa/tarifa.component';
import { FacturaComponent } from './paginas/factura/factura.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ClienteComponent } from './cliente/cliente.component';
import { ListarComponent } from './vehiculo/listar/listar.component';

import { EditarComponent } from './vehiculo/editar/editar.component';
import { AgregarComponent } from './vehiculo/agregar/agregar.component';

import { AgregarclienteComponent } from './cliente/agregarcliente/agregarcliente.component';
import { EditarclienteComponent } from './cliente/editarcliente/editarcliente.component';
import { CrearTicketComponent } from './ticket/crear-ticket/crear-ticket.component';
import { ListarTicketComponent } from './ticket/listar-ticket/listar-ticket.component';
import { EditarTicketComponent } from './ticket/editar-ticket/editar-ticket.component';
import { ListarcComponent } from './cliente/listarc/listarc.component';
import { ListarFacturaComponent } from './factura/listar-factura/listar-factura.component';
import { EditarFacturaComponent } from './factura/editar-factura/editar-factura.component';
import { CrearFacturaComponent } from './factura/crear-factura/crear-factura.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    TicketComponent,
    InicioComponent,
    TarifaComponent,
    FacturaComponent,
    VehiculoComponent,
    ClienteComponent,
    ListarComponent,
    EditarComponent,
    AgregarComponent,
 
    AgregarclienteComponent,
    EditarclienteComponent,
    CrearTicketComponent,
    ListarTicketComponent,
    EditarTicketComponent,
    ListarcComponent,
    ListarFacturaComponent,
    EditarFacturaComponent,
    CrearFacturaComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    FormsModule,
    MatCommonModule,
    CommonModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
