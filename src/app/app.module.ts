import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSideComponent } from './menu-side/menu-side.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ClientesComponent } from './clientes/clientes.component';
import { TableModule } from 'primeng/table';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuSideComponent,
    CadastroClienteComponent,
    ClientesComponent,
    EditarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
