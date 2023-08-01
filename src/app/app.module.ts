import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    FormsModule,
    MatCommonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
