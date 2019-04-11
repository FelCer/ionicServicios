import { Component,OnInit } from '@angular/core';
import { SolicitudService } from '../solicitud.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {
  miarreglo:any[];
  ngOnInit(){
    this.servicioPais.getAllPais().subscribe( 
        data => {
          this.miarreglo=data;
          console.log(data)
        },
        erro=>console.log(erro)
        );
  }
  constructor(private servicioPais:SolicitudService){

  }
}

