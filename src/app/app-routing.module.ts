import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { TesteCadastroComponent } from './teste-cadastro/teste-cadastro.component';

const routes: Routes = [
  { path:"clientes", component:ClientesComponent },
  { path:"cadastro-cliente", component:CadastroClienteComponent },
  { path:"editar-cliente/:id", component:EditarClienteComponent },
  { path:'teste-cadastro', component:TesteCadastroComponent},
  { path:'cadastro-pessoa', component:CadastroPessoaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
