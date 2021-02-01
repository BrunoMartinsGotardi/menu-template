
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  @Input() email: string = "";
  senha: string = "";
  organizacao: string = "";

  constructor(public fireBaseService: FirebaseService, private router: Router) {
    
  }

  efetuouLogin: boolean = false

  ngOnInit(): void {
    const usuarioStorage = JSON.parse(localStorage.getItem('user'))
    if (usuarioStorage) {
      this.router.navigate(['/cadastro-pessoa'])
    } else {
      this.efetuouLogin = false
    }
  }

  logar() {
    this.fireBaseService.logarConta(this.email,this.senha, this.organizacao).then(_ => {
      this.fireBaseService.authState().subscribe(res => {
        if(res && res.uid) {
          console.log(res)
          this.router.navigate([''])
          console.log(this.email)
        }
      })
    }).catch(err => alert(err))
  }
}
