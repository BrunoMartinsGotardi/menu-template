import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule }   from '@angular/forms';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSideComponent } from './menu-side/menu-side.component';
import { CadastroClienteComponent } from './Cliente/cadastro-cliente/cadastro-cliente.component';
import { ClientesComponent } from './Cliente/clientes/clientes.component';
import { TableModule } from 'primeng/table';
import { EditarClienteComponent } from './Cliente/editar-cliente/editar-cliente.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { LoginComponent } from './login/login.component';
import { InjectionToken } from '@angular/core';
import { TENANT_ID } from '@angular/fire/auth';
import { FirebaseService } from './services/firebase.service';
import {InputTextModule} from 'primeng/inputtext';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuSideComponent,
    CadastroClienteComponent,
    ClientesComponent,
    EditarClienteComponent,
    CadastroPessoaComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    CardModule,
    DividerModule,
    InputTextModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDqSWpmbu0Jz4wkEIoaKarp8DJlWDhoU6w",
      authDomain: "ascendant-timer-302314.firebaseapp.com"      
  })
],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
