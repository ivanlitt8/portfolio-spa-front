import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/model/servicio';
import { SServicioService } from 'src/app/services/s-servicio.service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css']
})
export class NewServiceComponent implements OnInit {

  nombreS: string;
  descripcionS: string;
  imageS: string;

  constructor(private sServicio: SServicioService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const servicio = new Servicio(this.nombreS, this.descripcionS, this.imageS);
    this.sServicio.save(servicio).subscribe(
      data => {
        alert("Servicio agregado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló")
        this.router.navigate(['']);
      }
    )
  }

}
