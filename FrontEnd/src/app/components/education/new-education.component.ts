import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { SEducacionService } from 'src/app/services/s-educacion.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {

  nombreE: string;
  descripcionE: string;

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Education(this.nombreE, this.descripcionE);
    this.sEducacion.save(educacion).subscribe(
      data => {
        alert("Educacion agregada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló")
        this.router.navigate(['']);
      }
    )
  }


}
