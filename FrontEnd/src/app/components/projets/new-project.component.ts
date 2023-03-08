import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { SProyectoService } from 'src/app/services/s-proyecto.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  nombreP: string;
  descripcionP: string;
  imageP?: string;
  fechaInicioP: string;
  enlaceP: string;

  constructor(private sProyecto: SProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Project(this.nombreP, this.descripcionP, this.imageP, this.fechaInicioP, this.enlaceP);
    this.sProyecto.save(proyecto).subscribe(
      data => {
        alert("Proyecto agregado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló")
        this.router.navigate(['']);
      }
    )
  }


}
