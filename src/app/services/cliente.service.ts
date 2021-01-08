import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientesUrl = "http://localhost:3000/clientes"

  constructor(private httpClient: HttpClient) { }

  listarClientes(){
    return this.httpClient.get(this.clientesUrl)
  }

  cadastrarCliente(clientes: Cliente): Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.clientesUrl, clientes)
  }

  selecionarClienteEditavel(id: any): Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.clientesUrl}/${id}`)
  }


  concluirEdicaoCliente(clientes): Observable<Cliente>{
    return this.httpClient.put<Cliente>(`${this.clientesUrl}/${clientes.id}`, clientes)
  }

  excluirCliente(id:any): Observable<Cliente>{
    return this.httpClient.delete<Cliente>(`${this.clientesUrl}/${id}`)
  }
}
