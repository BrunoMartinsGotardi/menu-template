import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteStorageService } from 'src/app/services/storage/cliente.storage.service';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cliente: Cliente = {
    id: '',
    nome: '',
    email: '',
    apelido: '',
    cpf: '',
    anoNascimento: ''
  }

  constructor(private router: Router, private clienteService: ClienteStorageService) { }

  ngOnInit(): void {
  }

  voltarParaClientes(){
    this.router.navigate(['/clientes'])
  }

  cadastrarCliente(){
    this.clienteService.saveCliente(this.cliente).subscribe(()=>{
      alert("Cliente Cadastrado com sucesso");
      this.voltarParaClientes();
    })
  }
}
