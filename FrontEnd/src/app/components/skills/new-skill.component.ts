import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/services/s-skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombreSk: string;
  porcentajeSk: number;
  imageSk: string;

  constructor(private sSkill: SSkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.nombreSk, this.porcentajeSk, this.imageSk);
    this.sSkill.save(skill).subscribe(
      data => {
        alert("Skill agregada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló")
        this.router.navigate(['']);
      }
    )
  }

}
