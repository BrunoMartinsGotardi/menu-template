import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.css']
})
export class MenuSideComponent implements OnInit {

  subMenuCadastros:boolean = false;
  subMenuVendas:boolean = false;
  
  @Input() fixarMenu:boolean = false;

  constructor() { }


  ngOnInit(): void {
  }

  mudarEstadoMenuCadastros(){
    this.subMenuCadastros = !this.subMenuCadastros
    console.log(this.subMenuCadastros);
  }

  mudarEstadoMenuVendas(){
    this.subMenuVendas = !this.subMenuVendas
    console.log(this.subMenuVendas);
  }

  fixarMenuAberto(){
   this.fixarMenu = !this.fixarMenu
  }


}
