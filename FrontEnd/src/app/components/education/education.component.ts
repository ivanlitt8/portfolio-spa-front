import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { SEducacionService } from 'src/app/services/s-educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educacion: Education[] = [];

  isLogged = false;

  constructor(private educacionS: SEducacionService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionS.lista().subscribe(
      data => {
        this.educacion = data;
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar ")
        }
      )
    }
  }

}
