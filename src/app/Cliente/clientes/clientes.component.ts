import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cliente: Cliente[] 

  constructor(private router: Router, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe((cliente: Cliente[]) =>{
      this.cliente = cliente
    })
  }

  navegarParaCadastro(){
    this.router.navigate(['/cadastro-cliente'])
  }

  excluirCliente(id:any){
    this.clienteService.excluirCliente(id).subscribe(()=> {
      alert("Cliente excluido com sucesso");
      this.clienteService.listarClientes().subscribe((cliente: Cliente[])=> {
        this.cliente= cliente
      })
    })
  }
  selecionarEdicaoCliente(id:any){
    this.clienteService.selecionarClienteEditavel(id).subscribe(()=>{
      this.router.navigate(['edicao-cliente'])
    })
  }
}
