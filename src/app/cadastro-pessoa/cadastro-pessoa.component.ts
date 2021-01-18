import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  cliente: boolean = false;
  fornecedor: boolean = false;

  @ViewChild('inputVista') inputVista: ElementRef<HTMLInputElement>
  @ViewChild('inputPrazo') inputPrazo:ElementRef<HTMLInputElement>

  constructor() { }

  ngOnInit(): void {
  }

  mostrarEsconderCliente(){
    this.cliente = !this.cliente
  }

  mostrarEsconderFornecedor(){
    this.fornecedor = !this.fornecedor
  }

  verificarInputVista(){
    if(this.inputVista.nativeElement.checked){
      this.inputPrazo.nativeElement.checked = false 
    }
  }

  verificarInputPrazo(){
    if(this.inputPrazo.nativeElement.checked){
      this.inputVista.nativeElement.checked = false
    }
  }
}
