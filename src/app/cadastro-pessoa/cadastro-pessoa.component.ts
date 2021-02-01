import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

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

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  angularFireAuth: AngularFireAuth

  ngOnInit(): void {
    this.firebaseService.estaLogado().then(user => console.log(user))
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
  
  logout(){
    this.firebaseService.deslogar().then(()=>{
      alert('deslogado com sucesso !')
      this.router.navigate(['/login'])
      console.log('deslogou')
    }).catch(()=> {
      alert('algo deu errado')
    })
  }
}
