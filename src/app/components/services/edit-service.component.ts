import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from 'src/app/model/servicio';
import { SServicioService } from 'src/app/services/s-servicio.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  servicio: Servicio = null;

  constructor(private servicioS: SServicioService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servicioS.detail(id).subscribe(
      data => {
        this.servicio = data;
      }, err => {
        alert("No pudo editarse el servicio");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servicioS.update(id, this.servicio).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("No pudo editarse el servicio");
        this.router.navigate(['']);
      }
    )
  }

}
