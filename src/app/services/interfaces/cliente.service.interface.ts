import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente.model';

export interface ClienteServiceInterface {
    
    getCliente(id: Number) : Observable<Cliente>;
    getClientes() : Observable<Cliente>;
    saveCliente(cliente : Cliente) : Observable<Cliente>;
    updateCliente(cliente: Cliente) : Observable<Cliente>;
    deleteCliente(id: Number) : Observable<Cliente>;

}