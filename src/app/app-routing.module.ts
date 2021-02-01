import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard'


import { CadastroClienteComponent } from './Cliente/cadastro-cliente/cadastro-cliente.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { ClientesComponent } from './Cliente/clientes/clientes.component';
import { EditarClienteComponent } from './Cliente/editar-cliente/editar-cliente.component';
import { MenuSideComponent } from './menu-side/menu-side.component';
import { LoginComponent } from './login/login.component';
import { CustomAngularFireAuthGuard } from './guards/custom.auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const loggedInToHome = () => redirectLoggedInTo(['cadastro-pessoa']);

const routes: Routes = [
  {
    path: "", component: MenuSideComponent, canActivate : [ CustomAngularFireAuthGuard ] , data: { authGuardPipe: redirectUnauthorizedToLogin }, children: [
      { path: "", component: HomeComponent},
      { path: "clientes", component: ClientesComponent },
      { path: "cadastro-cliente", component: CadastroClienteComponent },
      { path: "editar-cliente/:id", component: EditarClienteComponent },
      { path: 'cadastro-pessoa', component: CadastroPessoaComponent }
    ]
  },
  {
    path: "login", component: LoginComponent
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
