import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteServiceInterface } from '../interfaces/cliente.service.interface';
import { StorageServiceInterface } from '../interfaces/storage.service.interface';

const STORAGE_NAME = "CLIENTES_DATA"

@Injectable()
export class ClienteStorageService implements ClienteServiceInterface, StorageServiceInterface<Cliente> {

    constructor() {

    }

    getFromStorage(): Cliente[] {
        const clientesInStorage = localStorage.getItem(STORAGE_NAME);
        
        if(clientesInStorage) {
            return JSON.parse(clientesInStorage);
        } else {
            return [];
        }
    }

    setToStorage(allData: Cliente[]) {
        localStorage.setItem(STORAGE_NAME, JSON.stringify(allData));
    }
    
    getCliente(id: Number) : Observable<Cliente> {
        throw new Error('Method not implemented.');
    }

    getClientes(): Observable<Cliente> {
        throw new Error('Method not implemented.');
    }

    saveCliente(cliente: Cliente) : Observable<Cliente> {
        const clientes = this.getFromStorage();
        const ultimoClienteCadastrado = clientes[clientes.length - 1]
        const idAtual = ultimoClienteCadastrado.id + 1
        cliente.id = idAtual
        clientes.push(cliente);
        
        this.setToStorage(clientes);
        
        return of(cliente);
    }

    updateCliente(cliente: Cliente) : Observable<Cliente> {
        throw new Error('Method not implemented.');
    }

    deleteCliente(id: Number) : Observable<Cliente> {
        const clientes = this.getFromStorage();
        const indexEncontrado = clientes.findIndex(c => c.id = id);
        clientes.splice(indexEncontrado,  1);
        this.setToStorage(clientes);

        return of();
    }

}