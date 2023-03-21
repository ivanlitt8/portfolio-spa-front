import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SImageService } from 'src/app/services/s-image.service';
import { SSkillService } from 'src/app/services/s-skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombreSk: string;
  typeSk: string;
  porcentajeSk: number;
  imageSk: string;

  constructor(private sSkill: SSkillService, private router: Router, public sImageService: SImageService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.nombreSk, this.typeSk, this.porcentajeSk, this.imageSk);
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

  // uploadImage($event: any) {
  //   const id = this.activatedRouter.snapshot.params['id'];
  //   const name = "skill_" + id;
  //   this.sImageService.uploadImage($event, name)
  // }
}
