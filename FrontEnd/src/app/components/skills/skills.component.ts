import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { SSkillService } from 'src/app/services/s-skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  skill: Skill[] = [];

  isLogged = false;

  constructor(private skillS: SSkillService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void {
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkill();
        }, err => {
          alert("No se pudo eliminar ")
        }
      )
    }
  }

}