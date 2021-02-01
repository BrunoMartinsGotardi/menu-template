import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private fireBaseService: FirebaseService, private router: Router) { }

  userEmail: any

  ngOnInit(): void {
    const email = JSON.parse(window.localStorage.getItem('user'))
    this.userEmail = email
    console.log(this.userEmail)
  }

  logout(){
    this.fireBaseService.deslogar().then(()=>{
      alert('deslogado com sucesso !')
      this.router.navigate(['/login'])
      console.log('deslogou')
    }).catch(()=> {
      alert('algo deu errado')
    })
  }

}
