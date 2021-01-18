import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-teste-cadastro',
  templateUrl: './teste-cadastro.component.html',
  styleUrls: ['./teste-cadastro.component.css']
})
export class TesteCadastroComponent implements OnInit {

  cliente: boolean = true;
  fornecedor: boolean = true;
  transportadora: boolean = true;

  @ViewChild('inputCliente') inputCliente : ElementRef<HTMLInputElement>
  @ViewChild('inputFornecedor') inputFornecedor : ElementRef<HTMLInputElement>
  @ViewChild('inputTransportadora') inputTransportadora : ElementRef<HTMLInputElement>

  constructor() { }

  ngOnInit(): void {
  }

  mostrarEsconderCliente(){

    if(this.inputFornecedor.nativeElement.checked){
      this.inputFornecedor.nativeElement.checked = false
    }

    if(this.inputTransportadora.nativeElement.checked){
      this.inputTransportadora.nativeElement.checked = false
    }

    if(this.fornecedor == false){
      this.fornecedor = !this.fornecedor
    }

    if(this.transportadora == false){
      this.transportadora = !this.transportadora
    }

    this.cliente = !this.cliente;
  }

  mostrarEsconderFornecedor(){

    if(this.inputCliente.nativeElement.checked){
      this.inputCliente.nativeElement.checked = false
    }

    if(this.inputTransportadora.nativeElement.checked){
      this.inputTransportadora.nativeElement.checked = false
    }

    if(this.cliente == false){
      this.cliente = !this.cliente
    }

    if(this.transportadora == false){
      this.transportadora = !this.transportadora
    }

    this.fornecedor = !this.fornecedor
  }

  mostrarEsconderTransportadora(){

    if(this.inputCliente.nativeElement.checked){
      this.inputCliente.nativeElement.checked = false
    }

    if(this.inputFornecedor.nativeElement.checked){
      this.inputFornecedor.nativeElement.checked = false
    }

    if(this.fornecedor == false){
      this.fornecedor = !this.fornecedor
    }

    if(this.cliente == false){
      this.cliente = !this.cliente
    }

    this.transportadora = !this.transportadora
  }

    
}
