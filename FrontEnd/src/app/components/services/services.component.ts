import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/model/servicio';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { SServicioService } from 'src/app/services/s-servicio.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {

  servicio: Servicio[] = [];

  isLogged = false;

  constructor(private servicioS: SServicioService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarServicios();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarServicios(): void {
    this.servicioS.lista().subscribe(
      data => {
        this.servicio = data;
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.servicioS.delete(id).subscribe(
        data => {
          this.cargarServicios();
        }, err => {
          alert("No se pudo eliminar ")
        }
      )
    }
  }

}