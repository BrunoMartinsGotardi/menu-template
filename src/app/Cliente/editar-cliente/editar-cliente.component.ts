import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente = {
    id: 0,
    nome: '',
    email: '',
    apelido: '',
    cpf: '',
    anoNascimento: ''
  }
    
  constructor(private route: ActivatedRoute, private clienteService: ClienteService,
     private router : Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clienteService.selecionarClienteEditavel(id).subscribe((cliente) =>{
      this.cliente = cliente
    })
  }

  voltarParaClientes(){
    this.router.navigate(['/clientes']);
  }

  editarCliente(id:any){
    this.clienteService.concluirEdicaoCliente(id).subscribe(()=> {
      alert("Cliente editado com sucesso !");
      this.voltarParaClientes();
    })
  }
}
