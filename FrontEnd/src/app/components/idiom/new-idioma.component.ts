import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { SIdiomaService } from 'src/app/services/s-idioma.service';

@Component({
  selector: 'app-new-idioma',
  templateUrl: './new-idioma.component.html',
  styleUrls: ['./new-idioma.component.css']
})
export class NewIdiomaComponent implements OnInit {

  nombreI: string;
  nivelI: string;
  siglasI: string;

  constructor(private sIdioma: SIdiomaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const idioma = new Idioma(this.nombreI, this.nivelI, this.siglasI);
    this.sIdioma.save(idioma).subscribe(
      data => {
        alert("Idioma agregado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló")
        this.router.navigate(['']);
      }
    )
  }

}
