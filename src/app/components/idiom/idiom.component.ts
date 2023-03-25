import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/model/idioma';
import { SIdiomaService } from 'src/app/services/s-idioma.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-idiom',
  templateUrl: './idiom.component.html',
  styleUrls: ['./idiom.component.css']
})
export class IdiomComponent implements OnInit {

  idioma: Idioma[] = [];

  isLogged = false;

  constructor(private idiomaS: SIdiomaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarIdioma();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarIdioma(): void {
    this.idiomaS.lista().subscribe(
      data => {
        this.idioma = data;
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.idiomaS.delete(id).subscribe(
        data => {
          this.cargarIdioma();
        }, err => {
          alert("No se pudo eliminar ")
        }
      )
    }
  }

}