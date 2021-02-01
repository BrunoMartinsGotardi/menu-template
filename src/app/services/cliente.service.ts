import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import { ClienteServiceInterface } from './interfaces/cliente.service.interface';


@Injectable({
  providedIn: 'root'
})
export class ClienteService implements ClienteServiceInterface {
  
  clientesUrl = "http://localhost:3000/clientes"

  constructor(private httpClient: HttpClient) { }

  getCliente(id: Number): Observable<Cliente> {
    throw new Error('Method not implemented.');
  }
  getClientes(): Observable<Cliente> {
    throw new Error('Method not implemented.');
  }
  
  saveCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.clientesUrl, cliente);
  }
  
  updateCliente(cliente: Cliente): Observable<Cliente> {
    throw new Error('Method not implemented.');
  }
  deleteCliente(id: Number): Observable<Cliente> {
    throw new Error('Method not implemented.');
  }

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
