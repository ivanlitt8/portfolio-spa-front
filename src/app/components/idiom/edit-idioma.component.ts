import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { SIdiomaService } from 'src/app/services/s-idioma.service';

@Component({
  selector: 'app-edit-idioma',
  templateUrl: './edit-idioma.component.html',
  styleUrls: ['./edit-idioma.component.css']
})
export class EditIdiomaComponent implements OnInit {

  idioma: Idioma = null;

  constructor(private sIdioma: SIdiomaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sIdioma.detail(id).subscribe(
      data => {
        this.idioma = data;
      }, err => {
        alert("Error al modificar idioma");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sIdioma.update(id, this.idioma).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar idioma");
        this.router.navigate(['']);
      }
    )
  }


}
